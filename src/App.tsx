import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import List from './pages/List'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-[#f5e5b8] flex flex-col">
                <div className="bg-[#b25013] h-fit px-5 py-2 font-bold text-white leading-tight text-3xl w-full">
                    FAK <br />
                    SUE
                </div>
                <BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Login/> } />
                    <Route path="/home" element={<Home/> } />
                    <Route path="/register" element={<Register/> } />
                    <Route path="/list" element={<List/> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
