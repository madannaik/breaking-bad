import React from 'react'
import { Card } from '../components/Card'
import { useLocation } from "react-router-dom"
export const CharacterDetails = () => {

    const location = useLocation();
    return (
        <div className='character'>
            <Card data={location.state} />
        </div>
    )
}
