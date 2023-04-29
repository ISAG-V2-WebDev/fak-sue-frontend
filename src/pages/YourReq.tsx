import logoutBtn from '../assets/logout-512.png';
import home from '../assets/white-home-icon-png-21.jpg';
import ReqCard from '../components/ReqCard';
import { ReqCardProps } from '../components/ReqCard';
import { Link } from 'react-router-dom';

const YourReq = () => {
    const reqCardDataFromLocalStorage = localStorage.getItem('reqCardData');
    const reqCardData = reqCardDataFromLocalStorage
        ? JSON.parse(reqCardDataFromLocalStorage)
        : [];
    const reqCards = reqCardData.map((card: ReqCardProps, index: number) => (
        <ReqCard
            key={index}
            username={card.username}
            menuName={card.menuName}
            quantity={card.quantity}
            moreInfo={card.moreInfo}
        />
    ));

    return (
        <div>
            <div className="flex gap-4 absolute right-4 top-4">
                <Link to="/cardspage">
                    <div className=" max-w-[50px] right-20 top-5 w-full cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={home} alt="#" />
                    </div>
                </Link>
                <Link to="/login">
                    <div className=" max-w-[50px] right-20 top-5 w-full cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={logoutBtn} alt="#" />
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
