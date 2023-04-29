import Login from './pages/Login'
import Register from './pages/Register'
import CardsPage from './pages/CardsPage'
import YourReq from './pages/YourReq'
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
                    <Route path="/register" element={<Register/> } />
                    <Route path="/cardspage" element={<CardsPage/> } />
                    <Route path="/yourreq" element={<YourReq/> } />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
