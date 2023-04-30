import ExitBtn from '../assets/Delete-Red-X-Button-Transparent.png';
import cardWallpaper from '../assets/food-wallpaper.jpg';
import user from '../assets/user.png';
import { Profile } from './RubFakForm';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const schema = yup.object({
    topic: yup.string().required(),
    content: yup.string().required(),
    max_order: yup.number().required()
});

export type cardInfoProps = {
    username: string;
    restaurantName: string;
    time: string;
};

type FakFormProps = {
    changeFakFormVisibility: (visible: boolean) => void;
    orderFull: boolean;
    indexOfCard: number;
    remain: number;
    cardInfo?: cardInfoProps;
};

const FakForm = ({
    changeFakFormVisibility,
    orderFull,
    indexOfCard,
    remain,
    cardInfo
}: FakFormProps) => {
    const [menuName, setMenuName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [moreInfo, setMoreInfo] = useState('');
    const [profile, setProfile] = useState<Profile | null>(null);
    const token = Cookies.get('token');
    const profileFetch = async () => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                const { data: res } = await axios.get(`/api/User/profile`);
                // return res;
                setProfile(res);
            } catch (err) {
                // logout();
            }
        }
    };

    useEffect(() => {
        profileFetch();
    }, []);

    const cardDataFromLocalStorage = localStorage.getItem('cardData');
    const cardData = cardDataFromLocalStorage
        ? JSON.parse(cardDataFromLocalStorage)
        : [];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Save the submitted data to localStorage
        const newData = {
            indexOfCard,
            username: JSON.stringify(profile?.username).replaceAll('"', ''),
            owner: JSON.stringify(cardData[indexOfCard]?.username).replaceAll(
                '"',
                ''
            ),
            menuName,
            quantity,
            moreInfo
        };
        const existingData = JSON.parse(
            localStorage.getItem('reqCardData') || '[]'
        );
        localStorage.setItem(
            'reqCardData',
            JSON.stringify([...existingData, newData])
        );

        // Hide the RubFakForm component
        changeFakFormVisibility(false);

        // Reset the form inputs
        setMenuName('');
        setQuantity(0);
        setMoreInfo('');
    };

    return (
        <div className="flex fixed bg-black bg-opacity-70 w-full min-h-screen justify-center z-50">
            <form
                className="relative p-10 self-center flex flex-col gap-2 bg-[#d9d9d9] max-w-2xl w-full rounded-2xl mx-5"
                onSubmit={handleSubmit}>
                <div className="text-3xl bg-green-500 text-center h-fit w-fit p-4 absolute font-kanit font-bold sm:text-4xl z-50 text-white text rounded-full -top-8 left-1/2 transform -translate-x-1/2 shadow-md">
                    ฝากซื้ออะไร?
                </div>
                <div className="flex mb-10">
                    <div className="absolute top-0 left-0 w-full h-2/5 z-0 rounded-2xl shadow-md">
                        <div className="bg-black absolute opacity-50 h-full w-full overflow-hidden rounded-2xl"></div>
                        <img
                            className="h-full w-full object-top object-cover overflow-hidden rounded-2xl"
                            src={cardWallpaper}
                            alt="#"
                        />
                    </div>
                    <div className="max-w-[80px] z-10">
                        <img
                            src={user}
                            alt="user"
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                    <div className="flex-1 grid grid-rows-3 ml-4 z-10">
                        <div className="font-bold text-white overflow-hidden text-ellipsis w-full font-kanit">
                            {cardInfo?.username}
                        </div>
                        <div className="text-white overflow-hidden text-ellipsis w-full font-kanit">
                            ร้านค้า : {cardInfo?.restaurantName}
                        </div>
                        <div className="text-white font-kanit">
                            หมดเวลาสั่ง : {cardInfo?.time}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-3">
                        <label
                            htmlFor="menu"
                            className="font-kanit font-medium">
                            เมนู
                        </label>
                        <input
                            type="text"
                            id="menu"
                            value={menuName}
                            onChange={(event) => {
                                setMenuName(event.target.value);
                            }}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    {/* Quantity */}
                    <div className="col-span-1 min-w-[50px]">
                        <label
                            htmlFor="quantity"
                            className="font-kanit font-medium">
                            จำนวน
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(event) => {
                                setQuantity(parseInt(event.target.value));
                            }}
                            min={1}
                            max={remain}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                <label htmlFor="moreInfo" className="font-kanit font-medium">
                    อยากบอกอะไรเพิ่มเติมไหม?
                </label>
                <input
                    type="text"
                    id="moreInfo"
                    value={moreInfo}
                    onChange={(event) => setMoreInfo(event.target.value)}
                    className=" block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm col-span-3"></input>

                <button
                    type="submit"
                    className={` hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ${
                        orderFull
                            ? 'bg-red-700 hover:bg-red-500'
                            : 'bg-green-500'
                    }`}
                    disabled={orderFull}>
                    {orderFull ? 'Order Full' : 'Submit'}
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
    );
};

export default FakForm;
