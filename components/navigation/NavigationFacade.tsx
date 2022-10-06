import React from 'react';
import Navi from './Navi/Navi';
import HomeNavi from './HomeNavi/HomeNavi';
import MobileNavi from './MobileNavi/MobileNavi';
import useScreenInfo from '../../utils/useScreenInfo';
import { useRouter } from 'next/router'

const NavigationFacade = () => {
    const isMobileDevice = useScreenInfo()
    const [isOpened, setIsOpened] = React.useState(true)
    const [isHome, setIsHome] = React.useState(false)



    const handleClick = () => {
        setIsOpened(prevState => !prevState)
    }
    const router = useRouter()

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            router.pathname === '/home' ? setIsHome(true) : setIsHome(false)
        }
    }, [router.pathname])
    

    if (isMobileDevice) {
        return <MobileNavi isOpened={isOpened} onClick={handleClick} />
    }
    if (isHome) {
        return <HomeNavi />
    }
    return <Navi />
}

export default NavigationFacade