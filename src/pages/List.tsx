import Add from '../assets/add.png'
import Label from '../components/label'
import { FormEvent, useState } from 'react'
import exitBtn from '../assets/Delete-Red-X-Button-Transparent.png'

const List = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [restaurantName, setRestaurantName] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(`Restaurant Name: ${restaurantName}`)
        console.log(`Selected Time: ${selectedTime}`)
    }

    return (
        <>
            <div className="flex justify-center h-screen py-5">
                <div className="flex relative overflow-y-auto gap-3 w-full max-w-2xl h-full rounded-2xl ">
                    <div className="flex flex-col gap-3 w-full absolute">
                        <Label />
                    </div>
                </div>
            </div>
            <div className="absolute max-w-[5rem] bottom-10 right-10 hover:opacity-80 cursor-pointer">
                <img src={Add} alt="addBtn" onClick={() => {setIsFormVisible(true)}}/>
            </div>

            {isFormVisible && (
                <div className="flex absolute bg-black bg-opacity-70 w-full h-screen justify-center">
                    <form
                        className="relative p-10 self-center flex flex-col gap-3 bg-orange-200 max-w-2xl w-full rounded-2xl"
                        onSubmit={handleFormSubmit}>
                        <label htmlFor="restaurantName">Restaurant Name:</label>
                        <input
                            type="text"
                            id="restaurantName"
                            value={restaurantName}
                            onChange={(event) =>
                                setRestaurantName(event.target.value)
                            }
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                        />

                        <label htmlFor="selectedTime">Time:</label>
                        <select
                            id="selectedTime"
                            value={selectedTime}
                            onChange={(event) =>
                                setSelectedTime(event.target.value)
                            }
                            required
                            className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3">
                            <option value="">Select Time</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                        </select>

                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>

                        <div className="max-w-[50px] absolute -top-6 -right-6 cursor-pointer">
                            <img src={exitBtn} alt="#" onClick={() => {setIsFormVisible(false)}} />
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default List
