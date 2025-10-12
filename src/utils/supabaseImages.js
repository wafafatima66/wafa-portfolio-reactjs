import { supabase } from "../supabase/supabase";

// Returns a Supabase public URL for a project image.
// Accepts either a raw filename (e.g., "app.webp") or a storage path (e.g., "projects/app.webp").
// For HTTP URLs, it returns the value directly.
export function getProjectImageUrl(imageNameOrPath, transform = {}) {
  if (!imageNameOrPath) return "";

  const value = String(imageNameOrPath);

  // If already an absolute URL, return as-is
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  // If a full path is provided, use it; otherwise default to projects/<filename>
  const path = value.includes("/") ? value : `projects/${value}`;

  const { data } = supabase
    .storage
    .from("portfolio-images")
    .getPublicUrl(path, Object.keys(transform).length ? { transform } : undefined);

  return data?.publicUrl || "";
}

// Generic helper for any bucket path
export function getPublicImageUrl(path, transform = {}) {
  if (!path) return "";
  const { data } = supabase.storage
    .from("portfolio-images")
    .getPublicUrl(path, Object.keys(transform).length ? { transform } : undefined);
  return data?.publicUrl || "";
}