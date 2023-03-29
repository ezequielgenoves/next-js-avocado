import MenuItem from '@components/MenuItem/MenuItem'
import AppContext from '@appContext'
import React, { useContext } from 'react'

export default function Navbar() {
  const { menuEntries } = useContext(AppContext) as TContext
  return (
    <nav className='header'>
      <div className='header-menu'>
        {menuEntries.map(entry => (
          <MenuItem key={entry.id} {...entry} />
        ))}
      </div>
    </nav>
  )
}
