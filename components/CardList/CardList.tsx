import AppContext from '@appContext'
import CardItem from '@components/CardItem/CardItem'
import React, { useContext } from 'react'

const CardList = () => {
  const { items } = useContext(AppContext) as TContext
  return (
    <div className='CardList'>
      {Array.isArray(items) && items.map(item => (
        <CardItem key={item.id} {...item} />
      ))
      }
    </div>
  )
}

export default CardList