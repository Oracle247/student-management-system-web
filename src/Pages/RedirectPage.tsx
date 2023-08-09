import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RedirectPage = () => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const value = queryParams.get('link')
        if (!value) return
        console.log(value)
        // window.location.replace(value);
    }, [])


    return (
        <div>
            loading...
        </div>

    )
}

export default RedirectPage