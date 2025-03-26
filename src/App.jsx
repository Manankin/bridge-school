import { Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/Aboutpage'
import Contact from './pages/Contacts'
import PageNotFound from './pages/PageNotFound.jsx'
import { Layout } from './components/Layout'
import './App.scss'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
