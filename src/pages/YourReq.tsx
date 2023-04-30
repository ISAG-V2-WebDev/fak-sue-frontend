import logoutBtn from '../assets/logout-512.png';
import home from '../assets/white-home-icon-png-21.jpg';
import { CardProps } from '../components/Card';
import ReqCard from '../components/ReqCard';
import { ReqCardProps } from '../components/ReqCard';
import { Profile } from '../components/RubFakForm';
import { logout } from '../services/user.service';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const YourReq = () => {
    const reqCardDataFromLocalStorage = localStorage.getItem('reqCardData');
    const reqCardData = reqCardDataFromLocalStorage
        ? JSON.parse(reqCardDataFromLocalStorage)
        : [];
    const cardDataFromLocalStorage = localStorage.getItem('cardData');
    const cardData = cardDataFromLocalStorage
        ? JSON.parse(cardDataFromLocalStorage)
        : [];
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
    const reqCards = reqCardData
        .filter((card: ReqCardProps) => {
            return profile
                ? card.owner ==
                      JSON.stringify(profile?.username).replaceAll('"', '')
                : false;
        })
        .map((card: ReqCardProps, index: number) => (
            <ReqCard
                key={index}
                username={card.username}
                owner={card.owner}
                menuName={card.menuName}
                quantity={card.quantity}
                moreInfo={card.moreInfo}
            />
        ));

    return (
        <div>
            <div className="bg-black bg-opacity-40 text-white m-5 rounded-3xl text-center p-5 font-kanit text-4xl">
                รายการฝากซื้อของคุณ
            </div>
            <div className="flex gap-4 absolute right-4 top-4">
                <Link to="/cardspage">
                    <div className=" max-w-[50px] right-20 top-5 w-full cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={home} alt="#" />
                    </div>
                </Link>
                <Link to="/login">
                    <div className=" max-w-[50px] right-20 top-5 w-full cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={logoutBtn} onClick={logout} alt="#" />
                    </div>
                </Link>
            </div>

            <div className="m-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {reqCards}
            </div>
        </div>
    );
};

export default YourReq;
