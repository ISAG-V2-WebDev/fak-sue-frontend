import React from 'react'

const Label = () => {
    return (
        <div className="flex justify-between items-center w-full bg-white rounded-2xl h-28 shadow-lg p-5">
            <div>
                <img src="#" alt="user" />
            </div>
            <div className="font-bold text-lg">
                <p>Lorem ipsum dolor sit, amet consectetur </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl h-fit">
                ฝาก
            </button>
        </div>
    )
}

export default Label
