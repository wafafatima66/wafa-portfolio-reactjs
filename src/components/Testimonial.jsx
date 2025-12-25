import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight, FaTerminal, FaUserShield } from "react-icons/fa";
import testimonials from "../constants/testimonials.json";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 border-l-4 border-fuchsia-600 pl-6">
          <div className="flex items-center gap-3 mb-2">
            <FaTerminal className="text-fuchsia-500 animate-pulse text-xs" />
            <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              Peer_Validation // Feedback_Stream
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            CLIENT_<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-white NOT-italic">PERSPECTIVES.</span>
          </h2>
        </div>

        {/* BENTO GRID (Tactical Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between group overflow-hidden transition-all duration-500 hover:border-fuchsia-500/50 ${
                index === 0 ? "md:col-span-2" : "" 
                } ${
                index === 3 ? "md:col-span-2" : ""
              }`}
            >
              {/* Tactical Corner Brackets */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-fuchsia-500/0 group-hover:border-fuchsia-500 transition-all" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-fuchsia-500/0 group-hover:border-fuchsia-500 transition-all" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <FaQuoteRight className="text-3xl text-fuchsia-500/20 group-hover:text-fuchsia-500 group-hover:drop-shadow-[0_0_8px_#d946ef] transition-all duration-500" />
                  <span className="font-mono text-[10px] text-gray-700 uppercase">Ref_Log: 0{index + 1}</span>
                </div>
                
                <p className={`text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed font-medium italic ${
                  index === 0 || index === 3 ? "text-xl md:text-2xl tracking-tight" : "text-base"
                }`}>
                  "{testimonial.text}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-none object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10 p-1 bg-black"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-fuchsia-600 border-2 border-black" />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-tighter text-white group-hover:text-fuchsia-400 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-fuchsia-500 font-mono text-[9px] font-bold uppercase tracking-widest leading-none mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Background Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* STATS ROW (Industrial Status Readout) */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 divide-x divide-white/10 bg-white/[0.01]">
          {[
            { label: "Happy Clients", value: "10+" },
            { label: "Project Reviews", value: "200+" },
            { label: "Success Rate", value: "100%" },
            { label: "Global Reach", value: "5+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 group hover:bg-fuchsia-500/[0.03] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-fuchsia-600 group-hover:h-full transition-all duration-500" />
              <p className="text-4xl md:text-5xl font-black mb-2 tracking-tighter group-hover:text-fuchsia-500 transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-gray-500">
                // {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import React from "react";
// import { motion } from "framer-motion";
// import { FaQuoteRight } from "react-icons/fa";
// import testimonials from "../constants/testimonials.json";

// export default function Testimonial() {
//   return (
//     <section className="py-24 px-6 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-16">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em]"
//           >
//             // Recommendations
//           </motion.span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tighter">
//             Client <span className="text-gray-500">Perspectives.</span>
//           </h2>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex flex-col justify-between group overflow-hidden ${
//                 index === 0 ? "md:col-span-2" : "" // First card is wider
//               } ${
//                 index === 3 ? "md:col-span-2" : "" // Last card is wider
//               }`}
//             >
//               {/* Background Accent Glow */}
//               <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 blur-[50px] group-hover:bg-purple-600/20 transition-colors" />

//               <div className="relative z-10">
//                 <FaQuoteRight className="text-3xl text-purple-500/20 group-hover:text-purple-500/50 transition-colors mb-4" />
//                 <p className={`text-gray-300 leading-relaxed font-medium ${
//                   index === 0 || index === 3 ? "text-xl md:text-2xl" : "text-base"
//                 }`}>
//                   {testimonial.text}
//                 </p>
//               </div>

//               <div className="relative z-10 flex items-center gap-4 mt-6">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/20"
//                 />
//                 <div>
//                   <p className="font-bold text-sm tracking-tight">{testimonial.name}</p>
//                   <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">
//                     {testimonial.title}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}


//         </div>
//            {/* Minimal Stats Row */}
//         <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { label: "Happy Clients", value: "10+" },
//             { label: "Project Reviews", value: "200+" },
//             { label: "Success Rate", value: "100%" },
//             { label: "Global Reach", value: "5+" }
//           ].map((stat, i) => (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="border-l border-purple-500/30 pl-6"
//             >
//               <p className="text-4xl font-bold mb-1">{stat.value}</p>
//               <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }