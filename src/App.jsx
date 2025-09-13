import './App.css'
import Home from './pages/home.jsx'
import Header from './elements/header.jsx'
import HeaderData from './data/HeaderData.js'
function App() {

  return (
      <div className='App'>
        <Header companyName={HeaderData.companyName} lang={HeaderData.lang} textProject={HeaderData.textProject}/>
        <Home />
      </div>
  )
}

export default App
