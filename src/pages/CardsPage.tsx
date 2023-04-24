import Card from '../components/Card'
import Add from '../assets/add.png'
import FakForm from '../components/FakForm'
import RubFakForm from '../components/RubFakForm'
import { useState } from 'react'

const CardsPage = () => {
    const [isRubFakFormVisible, setIsRubFakFormVisible] = useState(false)
    const [isFakFormVisible, setIsFakFormVisible] = useState(false)

    const changeFakFormVisibility = (visibility: boolean) => {
        setIsFakFormVisible(visibility)
    }

    const changeRubFakFormVisibility = (visibility: boolean) => {
        setIsRubFakFormVisible(visibility)
    }

    return (
        <>
            <div className="m-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>
                <Card changeFakFormVisibility={changeFakFormVisibility}/>

            </div>
            <div className="fixed max-w-[5rem] bottom-10 right-10 hover:-translate-y-2 transition-transform cursor-pointer z-40">
                <img src={Add} alt="addBtn" onClick={() => {setIsRubFakFormVisible(true)}}/>
            </div>

            {isRubFakFormVisible && (<RubFakForm changeRubFakFormVisibility={changeRubFakFormVisibility}/>)}

            {isFakFormVisible && (<FakForm changeFakFormVisibility={changeFakFormVisibility}/>)}
        </>
    )
}

export default CardsPage
