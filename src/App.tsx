import { useEffect, useState } from "react"
import "./App.css"

interface User {
    id: string
    name: string
    avatar: string
    description: string
    website?: string
    createdAt: string
}

const App = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users")
                const response = await res.json()
                if (response) {
                    setUsers(response)
                    setLoading(false)
                }
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }
        fetchApi()
    }, [])

    return (
        <>
            <div>
                <h1>Users</h1>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <ul>{users.length && users.map((user: User) => <li key={user.id}>{JSON.stringify(user)}</li>)}</ul>
                )}
            </div>
        </>
    )
}
export default App
