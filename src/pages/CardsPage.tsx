import Add from '../assets/add.png'
import bell from '../assets/bellicon.png'
import Card from '../components/Card'
import { CardProps } from '../components/Card'
import FakForm from '../components/FakForm'
import RubFakForm from '../components/RubFakForm'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CardsPage = () => {
    const reqCardDataFromLocalStorage = localStorage.getItem('reqCardData')
    const reqCardData = reqCardDataFromLocalStorage
        ? JSON.parse(reqCardDataFromLocalStorage)
        : []
    const cardDataFromLocalStorage = localStorage.getItem('cardData')
    const cardData = cardDataFromLocalStorage
        ? JSON.parse(cardDataFromLocalStorage)
        : []

    const [isRubFakFormVisible, setIsRubFakFormVisible] = useState(false)
    const [isFakFormVisible, setIsFakFormVisible] = useState(false)
    const [orderFull, setOrderFull] = useState(false)

    const changeFakFormVisibility = (visibility: boolean) => {
        setIsFakFormVisible(visibility)
    }

    const changeRubFakFormVisibility = (visibility: boolean) => {
        setIsRubFakFormVisible(visibility)
    }

    const isOrderFull = (allow: boolean) => {
        setOrderFull(allow)
    }

    const cards = cardData.map((card: CardProps, index: number) => (
        <Card
            isOrderFull={isOrderFull}
            changeFakFormVisibility={changeFakFormVisibility}
            key={index}
            restaurantName={card.restaurantName}
            time={card.time}
            description={card.description}
            username={card.username}
            maxQuantity={card.maxQuantity}
        />
    ))

    return (
        <>
            {reqCardData.length > 0 && (
                <Link to="/yourreq">
                    <div className="absolute max-w-[50px] right-20 top-5 w-full cursor-pointer hover:-translate-y-1 transition-transform">
                        <img src={bell} alt="#" />
                        <span className="text-white font-kanit font-bold absolute bg-red-700 w-[25px] rounded-full text-center top-1">{reqCardData.length}</span>
                    </div>
                </Link>
            )}

            <div className="m-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cards}
            </div>
            <div className="fixed max-w-[5rem] bottom-10 right-10 hover:-translate-y-2 transition-transform cursor-pointer z-40">
                <img
                    src={Add}
                    alt="addBtn"
                    onClick={() => {
                        setIsRubFakFormVisible(true)
                    }}
                />
            </div>

            {isRubFakFormVisible && (
                <RubFakForm
                    changeRubFakFormVisibility={changeRubFakFormVisibility}
                />
            )}

            {isFakFormVisible && (
                <FakForm changeFakFormVisibility={changeFakFormVisibility} orderFull={orderFull} />
            )}
        </>
    )
}

export default CardsPage
