import HomeDetail from '@/app/_components/homeDetail/HomeDetail'
import React from 'react'

const page = ({params}) => {
  return (
    <HomeDetail id={params?.id}/>
  )
}

export default page