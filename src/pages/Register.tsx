import React from 'react'

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center h-fit">
            <div className="bg-white shadow-md px-5 lg:flex-row mx-10 sm:mx-24 py-8 rounded-3xl w-full max-w-3xl mt-20">
                <h1 className=" text-5xl font-bold mb-5">
                    FAK <br /> SUE
                </h1>
                <form action="#" className="flex flex-col">
                    <div className="grid gap-y-2 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-4 max-w-4xl sm:mx-20 items-center">
                        <label
                            htmlFor="email"
                            className="block text-md font-extrabold text-black font-kanit">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="abc@gmail.com"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                        />

                        <label
                            htmlFor="password"
                            className="block text-md font-extrabold text-black font-kanit">
                            Password
                        </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="************"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                            />

                        <label htmlFor="studentId" className="block text-md font-extrabold text-black font-kanit">
                            รหัสนักศึกษา
                        </label>
                        <input
                            id="studentId"
                            name="studentId"
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                        />
                        <label htmlFor="fname" className="block text-md font-extrabold text-black font-kanit">
                            ชื่อ
                        </label>
                        <input
                            id="fname"
                            name="fname"
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                        />
                        <label htmlFor="lname" className="block text-md font-extrabold text-black font-kanit">
                            นามสกุล
                        </label>
                        <input
                            id="lname"
                            name="lname"
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                              focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 flex justify-center py-2 px-4 border border-transparent
                                              rounded-full shadow-sm text-sm font-medium text-white bg-[#68174a] hover:bg-blue-700
                                              focus:outline self-center mt-10">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
