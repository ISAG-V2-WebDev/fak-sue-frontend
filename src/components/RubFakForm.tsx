import ExitBtn from '../assets/Delete-Red-X-Button-Transparent.png'
import CardData from '../data/cardData'
import { useState } from 'react'

type RubFakFormProps = {
    changeRubFakFormVisibility: (visible: boolean) => void
}

const RubFakForm = ({ changeRubFakFormVisibility }: RubFakFormProps) => {
    const [restaurantName, setRestaurantName] = useState('')
    const [time, setSelectedTime] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        // Save the submitted data to localStorage
        const newData = {
          username: 'guest',
          restaurantName,
          time,
          description,
        };
        const existingData = JSON.parse(localStorage.getItem('cardData') || '[]');
        localStorage.setItem('cardData', JSON.stringify([...existingData, newData]));
      
        // Hide the RubFakForm component
        changeRubFakFormVisibility(false);
      
        // Reset the form inputs
        setRestaurantName('');
        setSelectedTime('');
        setDescription('');
      };      
    

    return (
        <div className="flex fixed bg-black bg-opacity-70 w-full min-h-screen justify-center z-50">
            <form
                className="relative p-10 self-center flex flex-col gap-3 bg-[#d9d9d9] max-w-2xl w-full rounded-2xl mx-5"
                onSubmit={handleSubmit}>
                <div className="bg-green-500 text-center h-fit w-fit p-4 absolute font-kanit font-bold text-4xl text-white text rounded-full -top-8 left-1/3 shadow-md">
                    รับฝากซื้อจ้า
                </div>
                <label
                    htmlFor="restaurantName"
                    className="font-kanit font-medium">
                    ชื่อร้าน
                </label>
                <input
                    type="text"
                    id="restaurantName"
                    value={restaurantName}
                    onChange={(event) => setRestaurantName(event.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                />

                <label
                    htmlFor="selectedTime"
                    className="font-kanit font-medium">
                    เวลา
                </label>
                <select
                    id="time"
                    value={time}
                    onChange={(event) => setSelectedTime(event.target.value)}
                    required
                    className=" block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3">
                    <option value="">Select Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                <label htmlFor="description" className="font-kanit font-medium">
                    รายละเอียดเพิ่มเติม
                </label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className=" block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"></input>

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                </button>

                <div className="max-w-[50px] absolute -top-6 -right-6 cursor-pointer">
                    <img
                        src={ExitBtn}
                        alt="#"
                        onClick={() => {
                            changeRubFakFormVisibility(false)
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default RubFakForm
