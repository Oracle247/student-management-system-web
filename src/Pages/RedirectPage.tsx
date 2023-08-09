import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RedirectPage = () => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const value = queryParams.get('link')
        const trxref = queryParams.get('trxref')
        const reference = queryParams.get('reference')

        if (!value) return
        console.log(value)
        const url = value + '?trxref=' + trxref + '&reference=' + reference
        console.log(url)
        window.location.replace(url);
    }, [])


    return (
        <div>
            loading...
        </div>

    )
}

export default RedirectPage