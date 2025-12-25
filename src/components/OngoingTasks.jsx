import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaRocket, 
  FaDiagramProject, 
  FaClock, 
  FaTerminal, 
  FaMicrochip,
  FaSquarePlus
} from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import ongoingTasksData from "../constants/ongoing_tasks.json";

const ICON_MAP = {
  github: FaGithub,
  openai: SiOpenai,
  rocket: FaRocket,
  project: FaDiagramProject,
};

const OngoingTasks = () => {
  const ongoingTasks = ongoingTasksData || [];

  return (
    <section className="relative py-28 px-6 lg:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
{/* Cyber-Industrial Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-fuchsia-500/10 pb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_8px_#d946ef]" />
              <span className="text-fuchsia-500 font-mono text-xs font-black uppercase tracking-[0.4em]">
                Active_Processes // V.02
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Current <span className="text-fuchsia-500 italic">Tasks.</span>
            </h2>
          </motion.div>
          <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest text-right">
            [ STATUS: PROCESSING ] <br />
            [ NODES: {ongoingTasks.length} ]
          </div>
        </div>

        {/* Industrial Blueprint List */}
        <div className="space-y-4">
          {ongoingTasks.map((task, index) => {
            const IconComponent = ICON_MAP[task.icon] || FaMicrochip;
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row gap-6 items-start md:items-center bg-white/[0.02] border border-white/10 p-6 md:p-8 hover:bg-fuchsia-500/[0.03] hover:border-fuchsia-500/40 transition-all duration-300"
              >
                {/* ID Counter */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-1 bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
                </div>

                {/* Status Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-black border border-white/10 flex items-center justify-center group-hover:border-fuchsia-500/50 transition-colors">
                  <IconComponent className="text-2xl text-gray-500 group-hover:text-fuchsia-500 group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Main Content Info */}
                <div className="flex-grow space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-fuchsia-500 font-mono text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border border-fuchsia-500/20">
                      {task.category}
                    </span>
                    <span className="text-gray-600 font-mono text-[9px]">ID_00{task.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase group-hover:text-fuchsia-400 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2 italic">
                    {task.description}
                  </p>
                </div>

                {/* Progress Visualizer (Vertical HUD Style) */}
                <div className="w-full md:w-48 flex flex-col justify-end pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-8 space-y-3">
                   <div className="flex items-center justify-between font-mono">
                      <span className="text-[9px] text-gray-500 font-bold">PROG_DATA</span>
                      <span className="text-xs text-white font-black tracking-tighter">{task.progress}%</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${task.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute h-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]"
                      />
                   </div>
                   <div className="flex items-center justify-between text-[9px] text-gray-600 font-mono">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-fuchsia-500/40" />
                        <span>{new Date(task.start_date).getFullYear()}</span>
                      </div>
                      <span className="text-green-500 font-bold group-hover:animate-pulse tracking-widest">{task.status.toUpperCase()}</span>
                   </div>
                </div>

                {/* Absolute Decoration Brackets */}
                <FaSquarePlus className="absolute top-2 right-2 text-white/5 group-hover:text-fuchsia-500 transition-colors text-xs" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OngoingTasks;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaRocket, FaProjectDiagram, FaClock, FaCertificate } from "react-icons/fa";
// import { SiOpenai } from "react-icons/si";
// import ongoingTasksData from "../constants/ongoing_tasks.json";

// const ICON_MAP = {
//   github: FaGithub,
//   openai: SiOpenai,
//   rocket: FaRocket,
//   project: FaProjectDiagram,
// };

// const OngoingTasks = () => {
//   const ongoingTasks = ongoingTasksData || [];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Unknown";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
//   };

//   return (
//     <section className="min-h-screen relative overflow-hidden bg-black py-24 px-4 sm:px-6 lg:px-8">
//       {/* Background Glows - Matching Courses Design */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
//         />
//         <motion.div 
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
//           >
//             <FaRocket className="text-purple-400 text-sm" />
//             <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">In Progress</span>
//           </motion.div>
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//             Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Endeavors</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Exploring new frontiers in technology and innovation through ongoing research and development.
//           </p>
//         </div>

//         {/* Tasks Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
//         >
//           {ongoingTasks.map((task) => {
//             const IconComponent = ICON_MAP[task.icon] || FaProjectDiagram;
            
//             return (
//               <motion.div
//                 key={task.id}
//                 variants={cardVariants}
//                 className="relative bg-gradient-to-b from-gray-900/40 to-black border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl group"
//               >
//                 {/* Visual Accent Icon (Transparent in corner) */}
//                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//                   <IconComponent className="text-7xl text-white" />
//                 </div>

//                 <div className="relative z-10 flex flex-col h-full">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
//                       <IconComponent className="text-white text-xl" />
//                     </div>
//                     <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-300 text-[10px] font-bold uppercase tracking-tighter">
//                       {task.category}
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
//                     {task.title}
//                   </h3>
                  
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-purple-500/30 pl-4">
//                     {task.description}
//                   </p>

//                   {/* Progress Section */}
//                   <div className="mt-auto">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Milestone</span>
//                       <span className="text-xs text-purple-300 font-mono">{task.progress}%</span>
//                     </div>
//                     <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${task.progress}%` }}
//                         transition={{ duration: 1.5, ease: "circOut" }}
//                         className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
//                       />
//                     </div>

//                     <div className="flex items-center justify-between mt-6">
//                       <div className="flex items-center text-[11px] text-gray-500 font-medium">
//                         <FaClock className="mr-2 opacity-50" />
//                         Started {formatDate(task.start_date)}
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{task.status}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OngoingTasks;