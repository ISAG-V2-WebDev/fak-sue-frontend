import React from 'react'
import avatar from '../assets/peeps-avatar-alpha.png'

const login = () => {
  return (
    <div className="flex justify-center items-center h-full">
        <div className="flex flex-col bg-white shadow-md px-5 lg:flex-row mx-10 sm:mx-24 py-8 rounded-3xl w-full max-w-5xl">
            <div className="max-w-md lg:max-w-lg self-center">
                <img src={avatar} alt="avatar" className="object-cover"/>
            </div>
            <div className="flex-col w-full">
                <h1 className="text-2xl text-center font-medium sm:text-4xl text-slate-700 px-3 lg:text-start">Login to your Account.</h1>
                <p className="px-3 text-center lg:text-start">See what is going on with your business.</p>
            </div>
        </div>
    </div>
  )
}

export default login
