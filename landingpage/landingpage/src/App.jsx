import HealthcareLanding from "./landingpage"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import AboutPage from "./componenets/about"
import Contact from "./componenets/contact"
import ServicesPage from "./componenets/services"
import BlogSection from "./componenets/blog"

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HealthcareLanding/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/blog" element={< BlogSection/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
