import React from 'react'
import { NameCard } from '../components/NameCard'
import useFetch from '../hooks/useFetch';
import { FiLoader } from 'react-icons/fi'
export const HomePage = () => {
    const { data, loading, error, isError } = useFetch('https://www.breakingbadapi.com/api/characters');

    return (
        <div className='main'>
            <h1 className='main__name'>Breaking Bad </h1>
            <div className='main__card'>
                {loading === true ? <div className='main__card--loading'>
                    <FiLoader fontSize={"2rem"} color="pink" />
                </div> : ""}
                {data && data.map((data, index) => {
                    return <NameCard key={index} data={data} />
                })}
                {isError === true ? <div className='main__card--loading'>
                    {error}
                </div> : ""}
            </div>
        </div>
    )
}
