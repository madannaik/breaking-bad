import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
export const NameCard = (props) => {


    let route = useNavigate()
    const RouteNext = () => {
        route('/character', { state: { ...props.data } });

    }

    return (
        <div className='ncard'>
            <p className='ncard__name'> {props.data.name}</p>
            <div className='ncard__btn' onClick={RouteNext}>
                <FaArrowRight />
            </div>
        </div>
    )
}
