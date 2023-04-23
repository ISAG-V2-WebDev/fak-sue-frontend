import ExitBtn from '../assets/Delete-Red-X-Button-Transparent.png'

type FakFormProps =  {
    changeFakFormVisibility : (visible: boolean) => void;
}

const FakForm = ({ changeFakFormVisibility }: FakFormProps) => {
    return (
        <div className="flex fixed bg-black bg-opacity-70 w-full min-h-screen justify-center z-50">
            <form
                className="relative p-10 self-center flex flex-col gap-3 bg-orange-200 max-w-2xl w-full rounded-2xl mx-5"
                /*onSubmit={handleFormSubmit}*/
            >
                <label htmlFor="restaurantName">Restaurant Name:</label>
                <input
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"
                />

                <label htmlFor="selectedTime">Time:</label>
                <select
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
                    <img
                        src={ExitBtn}
                        alt="#"
                        onClick={() => changeFakFormVisibility(false)}
                    />
                </div>
            </form>
        </div>
    )
}

export default FakForm
