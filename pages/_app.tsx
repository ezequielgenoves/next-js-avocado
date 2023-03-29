import Layout from '@components/Layout/Layout'
import AppContext from '@appContext';
import useInitialState from '@hooks/useInitialState';
import { AppProps } from 'next/app'
import '@style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}