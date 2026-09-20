import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /projects and /contact are section anchors on the home page in
            the original site's nav; redirect old direct links there too. */}
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  )
}
