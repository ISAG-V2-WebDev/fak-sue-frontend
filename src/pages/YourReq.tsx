import ReqCard from "../components/ReqCard"
import { ReqCardProps } from "../components/ReqCard";
const reqCardDataFromLocalStorage = localStorage.getItem('reqCardData')
const reqCardData = reqCardDataFromLocalStorage ? JSON.parse(reqCardDataFromLocalStorage) : [];



const YourReq = () => {

    const reqCards = reqCardData.map((card : ReqCardProps, index : number) => (
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
            <div className="m-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {reqCards}
            </div>
        </div>
    )
}

export default YourReq
