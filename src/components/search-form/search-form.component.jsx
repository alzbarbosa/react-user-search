import { useState, useEffect } from "react"
import { useUsersGlobalContext } from "../../context/UsersContext"

import "./search-form.styles.css"

const SearchForm = () => {
    const [searchByName, setSearchByName] = useState("")
    const [searchByTag, setSearchByTag] = useState("")

    const {users, setSearchedUsers} = useUsersGlobalContext()

    const filterUsers = () => {
        let usersFilteredByName
        let usersFilteredByTag

        if(searchByName !== "") {
            usersFilteredByName = users.filter((user) => {
                return user.firstName.toLowerCase().includes(searchByName.toLowerCase())
        })
        } else (
            usersFilteredByName = users
        )

        if(searchByTag !== "") {
            usersFilteredByTag = usersFilteredByName.filter((user)=> {
                return user.tag.some((tag)=> tag.toLowerCase().includes(searchByTag.toLowerCase())) 
            })
        } else (
            usersFilteredByTag = usersFilteredByName
        )
        
        setSearchedUsers(usersFilteredByTag)

    }

    useEffect(()=> {
        filterUsers()
    },[searchByName, searchByTag])

    return (
        <div className="search-form-container">
            <input
            className="search-form-input" 
            type="text"
            onChange={(e) => setSearchByName(e.target.value)} 
            placeholder="Search by name"/>

            <input
            className="search-form-input" 
            type="text"
            onChange={(e)=> setSearchByTag(e.target.value)} 
            placeholder="Search by tag"/>
        </div>
    )
}

export default SearchForm