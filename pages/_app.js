import '../styles/globals.css'
import NavigationFacade from '../components/navigation/NavigationFacade.tsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationFacade />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
