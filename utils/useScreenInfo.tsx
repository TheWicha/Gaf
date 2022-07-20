import React from 'react'
import { isMobile } from 'react-device-detect';

const useScreenInfo = () => {
    const [isMobileDevice, setIsMobileDevice] = React.useState(false)

    React.useEffect(() => {
        if(window){
            isMobile ? setIsMobileDevice(true) : setIsMobileDevice(false)
        }
    }, [])

    return isMobileDevice
}

export default useScreenInfo