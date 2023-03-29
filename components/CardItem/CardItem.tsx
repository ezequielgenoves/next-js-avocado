import React, { useContext } from 'react'
import Link from 'next/link'
import AppContext from '@appContext'

const CardItem = (item: TProduct) => {
  const { addToCart } = useContext(AppContext) as TContext
  const handleCartClick = (event: React.MouseEvent) => {
    event.preventDefault;
    addToCart()
  }
  return (
    <div className='CardItem'>
      <Link href={`/product/${item.id}`}>
        <a>
          <img className='CardItem-img' src={item.image} />
          <div className='CardItem-info'>
            <section className='CardItem-section'>
              <h2 className='CardItem-title'>{item.name}</h2>
              <p className='CardItem-price'>${item.price}</p>
            </section>
          </div>
        </a>
      </Link >
      <p className='CardItem-cart' onClick={handleCartClick}>🛒</p>
    </div >
  )
}

export default CardItem