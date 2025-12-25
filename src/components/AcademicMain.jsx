import React from 'react'
import AcademicBackground from './AcademicBackground'
import AcademicProjects from './AcademicProjects'
import { Link } from 'react-router-dom'

const AcademicMain = () => {
  return (
    // Clean white background, no distractions
    <div className="bg-white min-h-screen">
      {/* Minimalist "Back" Navigation */}
      <nav className="max-w-7xl mx-auto px-8 pt-8">
        <Link to="/" className="text-gray-400 hover:text-blue-600 text-sm font-medium transition-colors">
          ← Back to Portfolio
        </Link>
      </nav>

      <main>
        <AcademicProjects />
        
        {/* Simple Divider */}
        <div className="max-w-4xl mx-auto border-t border-gray-100" />
        
        <AcademicBackground />
      </main>

      <footer className="py-12 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} — Academic Portfolio
      </footer>
    </div>
  )
}

export default AcademicMain

// import React from 'react'
// import AcademicBackground from './AcademicBackground'
// import AcademicProjects from './AcademicProjects'

// const AcademicMain = () => {
//   return (
//     <div className="bg-gray-50 text-gray-900 min-h-screen">
//       <AcademicProjects />
//       <AcademicBackground />
//     </div>
//   )
// }

// export default AcademicMain