import avatar from '../assets/peeps-avatar-alpha.png'
import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <div className="flex justify-center items-center h-full flex-1">
            <div className="flex flex-col bg-white shadow-md px-5 lg:flex-row mx-10 sm:mx-24 py-8 rounded-3xl w-full max-w-5xl ">
                <div className="max-w-xs lg:max-w-lg self-center flex relative">
                    <h1 className="text-3xl absolute sm:text-4xl lg:text-6xl font-bold">
                        FAK <br /> SUE
                    </h1>
                    <img
                        src={avatar}
                        alt="avatar"
                        className="object-cover z-10"
                    />
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col w-full justify-center">
                    <h1 className="text-2xl text-center font-medium sm:text-4xl text-slate-700 lg:text-start">
                        Login to your Account.
                    </h1>
                    <p className="text-center lg:text-start mt-2">
                        See what is going on with your business.
                    </p>
                    <form action="#" className="flex flex-col space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="abc@gmail.com"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-400">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="************"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    checked
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent
                                              rounded-full shadow-sm text-sm font-medium text-white bg-[#68174a] hover:bg-blue-700
                                              focus:outline">
                                Login
                            </button>
                            <div className="relative">
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <div className="font-kanit text-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                    or
                                </div>
                            </div>

                            <Link to="/register">
                                <button
                                    type="button"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent
                                                rounded-full shadow-sm text-md font-bold text-blue-700 bg-white hover:bg-blue-700 hover:text-white border-blue-700
                                                focus:outline mt-3">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
