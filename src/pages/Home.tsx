import avatar from '../assets/peeps-avatar-alpha.png'

const home = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="flex flex-col gap-5 my-10 mx-10 w-full max-w-sm px-2">
                <button className="text-2xl bg-opacity-10 bg-black hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-3xl h-20">
                    ไม่มีคนที่ฝากคุณซื้อ
                </button>
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-4xl py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-3xl h-20">
                    รับฝาก
                </button>
                <div className="max-w-sm self-center absolute bottom-0">
                    <img src={avatar} alt="avatar" className="object-cover z-10" />
                </div>
            </div>
        </div>
    )
}

export default home
