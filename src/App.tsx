import Login from './pages/Login'
import { useState } from 'react'

const App = () => {
    return (
        <div className="h-screen bg-[#f5e5b8]">
            <div className="bg-[#b25013] h-fit px-5 py-2 font-bold text-white leading-tight text-3xl fixed w-screen">
                FARK <br />
                SUE
            </div>
            <Login />
        </div>
    )
}

export default App
