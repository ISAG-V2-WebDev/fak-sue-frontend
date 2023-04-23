import Card from '../components/Card'
import Add from '../assets/add.png'
import ExitBtn from '../assets/Delete-Red-X-Button-Transparent.png'
import FakForm from '../components/FakForm'
import { useState } from 'react'

const CardsPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [isFakFormVisible, setIsFakFormVisible] = useState(true)
    const [restaurantName, setRestaurantName] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    const changeFakFormVisibility = (visibility: boolean) => {
        setIsFakFormVisible(visibility)
    }

    return (
        <>
            <div className="m-3.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
            <div className="absolute max-w-[5rem] bottom-10 right-10 hover:opacity-80 cursor-pointer">
                <img src={Add} alt="addBtn" onClick={() => {setIsFormVisible(true)}}/>
            </div>

            {isFormVisible && (
                <div className="flex fixed bg-black bg-opacity-70 w-full min-h-screen justify-center z-50">
                    <form
                        className="relative p-10 self-center flex flex-col gap-3 bg-orange-200 max-w-2xl w-full rounded-2xl mx-5"
                        /*onSubmit={handleFormSubmit}*/>
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
                            <img src={ExitBtn} alt="#" onClick={() => {setIsFormVisible(false)}} />
                        </div>
                    </form>
                </div>
            )}

            {isFakFormVisible && (<FakForm changeFakFormVisibility={changeFakFormVisibility}/>)}
        </>
    )
}

export default CardsPage
