import React from 'react'
export const Card = ({ data }) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <img src={data.img} alt={data.name} />
            </div>
            <div className='card__content'>
                <p >{data.name}</p>
                <p >as</p>
                <p>{data.portrayed}</p>
                <p >{data.birthday}</p>
                <p >Occupation:</p>
                {data.occupation.map((sdata, index) => {
                    return <p key={index} className='card__content--occu'>
                        {sdata}
                    </p>
                })}

                <div className='card__content--season'>
                    {data.appearance.map((sdata, index) => {
                        return <span key={index}>{sdata}</span>
                    })}

                    {/* <span>2</span>
                    <span>3</span>
                    <span>4</span> */}
                </div>
            </div>
        </div>
    )
}
