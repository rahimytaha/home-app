import React from 'react'
import Button from './Button'

const HomeCart = ({data}) => {
  return (
    <div className={`p-3 cursor-pointer bg-lightDark  duration-200  rounded-3xl border border-transparent hover:border-textYellow hover:shadow-yellowShadow  `}>
        <img className="rounded-3xl " src={data.image} alt="" />
        <h1 className="text-2xl text-white p-2 ">
            {data.title}
        </h1>
        <div className="flex justify-between p-2 items-end ">
            <p className="text-red text-2xl font-bold   ">{data.price} <span className="text-blue text-sm ">تومان</span></p>
        <Button id={data.id}/>
        </div>

        
    </div>
  )
}

export default HomeCart