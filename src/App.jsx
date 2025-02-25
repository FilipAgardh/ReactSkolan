import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Reviews from './pages/Reviews'

import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <div>
          <Router>
            <Header />
            <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/menu" element={<Menu />} />
               <Route path="/reviews" element={<Reviews />} />
            </Routes>
            </main>
            <Footer />
          </Router>
        </div>
    )
}

export default App
