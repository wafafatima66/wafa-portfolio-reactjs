import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    const env = loadEnv(mode, process.cwd(), "");
    Object.assign(process.env, env);
  }

  const devApiPlugin =
    command === "serve"
      ? {
          name: "local-api-send-email",
          configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
              try {
                const url = new URL(req.url || "/", "http://localhost");
                if (url.pathname !== "/api/send-email") return next();

                const resLike = {
                  status(code) {
                    res.statusCode = code;
                    return resLike;
                  },
                  json(payload) {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify(payload));
                  },
                };

                if ((req.method || "").toUpperCase() !== "POST") {
                  return resLike
                    .status(405)
                    .json({ error: "Method not allowed" });
                }

                let raw = "";
                req.on("data", (chunk) => {
                  raw += chunk;
                });
                req.on("end", async () => {
                  try {
                    req.body = raw ? JSON.parse(raw) : {};
                  } catch {
                    req.body = {};
                  }

                  try {
                    const mod = await import("./api/send-email.js");
                    await mod.default(req, resLike);
                  } catch (err) {
                    resLike.status(500).json({
                      error: "Internal server error",
                      message: err?.message || "Unknown error",
                    });
                  }
                });
              } catch {
                next();
              }
            });
          },
        }
      : null;

  return {
    plugins: [react(), devApiPlugin].filter(Boolean),
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1200,
    },
  };
});
