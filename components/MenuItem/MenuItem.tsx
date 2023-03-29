import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import AppContext from '@appContext'

const MenuItem = (entry: TMenuEntry) => {
  const { activeTab, changeActiveTab, cartItems } = useContext(AppContext) as TContext
  const handleClickItem = ({ target }: React.MouseEvent<HTMLElement>) => {
    changeActiveTab((target as HTMLAnchorElement).id)
  }

  return (
    <Link key={entry.id} href={entry.href}>
      <a
        id={entry.id}
        onClick={handleClickItem}
        className={`header-menu-item ${activeTab === entry.id && 'active'}`}
      >
        {entry.label} {entry.id === 'carrito' && cartItems > 0 && `(${cartItems})`}
      </a>
    </Link>
  )
}

export default MenuItem