import { useEffect, useState } from 'react'

const useInitialState = () => {
  const [items, setItems] = useState<TProduct[]>([])
  const [activeTab, setActiveTab] = useState<string>('store')
  const menuEntries = [
    { id: 'store', label: '🥑 Avo Store', href: '/' },
    { id: 'carrito', label: '🛒 Carrito', href: '/about' },
  ]
  const [cartItems, setCartItems] = useState<number>(0)

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then((res) => setItems(res.data))
  }, [])

  function changeActiveTab(tab: string) {
    setActiveTab(tab)
  }

  function addToCart() {
    console.log(cartItems)
    setCartItems(cartItems + 1)
  }

  return {
    items,
    menuEntries,
    activeTab,
    changeActiveTab,
    cartItems,
    addToCart,
  }
}

export default useInitialState
