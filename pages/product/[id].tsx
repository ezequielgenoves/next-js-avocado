import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppContext from '@appContext'

const ProductPage = () => {
  const { query } = useRouter()
  const { changeActiveTab } = useContext(AppContext) as TContext
  useEffect(() => {
    changeActiveTab('');
  }, [])
  return (
    <section>
      <h1>Página producto: {query.id}</h1>
    </section>
  )
}

export default ProductPage
