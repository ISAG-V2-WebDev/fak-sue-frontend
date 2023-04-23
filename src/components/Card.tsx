import user from '../assets/user.png'

const Card = () => {
    return (
        <div className="relative bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/3">
                <div className="bg-black absolute opacity-50 h-full w-full"></div>
                <img
                    className="h-full w-full object-cover"
                    src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
                    alt=""
                />
            </div>
            <div className="relative z-10 p-4">
                <div className="flex flex-row">
                    <div className="w-20">
                        <img
                            src={user}
                            alt="user"
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className="flex flex-col ml-4">
                        <div className="font-bold text-white">username</div>
                        <div className="text-white">restaurant : lorem</div>
                        <div className="text-white">Time : 00.00 </div>
                    </div>
                </div>
                <div className="h-32 bg-slate-100 rounded-md mt-2 overflow-auto p-2">
                    <p className="text-black">
                        description Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Velit, esse officia? Ipsa possimus
                        voluptatem, magni sunt perferendis quam eaque doloribus
                        soluta dolores officiis iste beatae debitis voluptas
                        commodi. Sit, perferendis.
                    </p>
                </div>
                <div className="flex justify-center">
                    <button className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-2">
                        ฝากซื้อ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
