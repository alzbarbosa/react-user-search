import { useState } from "react"
import { useUsersGlobalContext } from "../../context/UsersContext"

import "./add-tag.styles.css"

const AddTag = ({userId}) => {
    const [tagName, setTagName] = useState("")

    const {users, setUsers, searchedUsers, setSearchedUsers} = useUsersGlobalContext()
  
    const addTagToUser = (e) => {
        e.preventDefault()
        
        const id = userId
        const usersUpdate = users.map((user)=> {
            return user.id === id? {...user, tag: [...user.tag, tagName]} : user
        })
        const searchedUsersUpdate = searchedUsers.map((user) => {
            return user.id === id? {...user, tag: [...user.tag, tagName]} : user

        })

        setUsers(usersUpdate)
        setSearchedUsers(searchedUsersUpdate)
        setTagName("")
        console.log(usersUpdate)

    }

    return (
        <form onSubmit={addTagToUser}>
            <input
            className="tag-input" 
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)} 
            placeholder="Add a tag"/>
        </form>

    )
}

export default AddTag