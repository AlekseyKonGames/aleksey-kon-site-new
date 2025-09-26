import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Header from './elements/header.jsx'
import Footer from './elements/Footer.jsx'
import { NotFound } from './pages/NotFound.jsx'
function App() {

  return (
      <div className="App flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto px-4 pt-4 sm:pt-8 md:px-8">
          <Router> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
  )
}

export default App
