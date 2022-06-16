import {useState, useEffect} from "react"

const useFetch = (url) => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchUsers = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setResponse(data)
            setIsLoading(false)

        } catch(err) {
            setError(err)
            setIsLoading(false)
        }

        setIsLoading(false)

    }

    useEffect(()=> {

        fetchUsers(url)

    }, [url])

    return { response, error, isLoading }

}

export default useFetch
