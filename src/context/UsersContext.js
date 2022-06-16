import { createContext, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { userData } from "../userData";

const url = "https://api.hatchways.io/assessment/students"

const usersArray = Object.values(userData)
const usersArrayAddTagProperty = usersArray[0].map((user)=> ({
    ...user, tag: []
}))


const UsersContext = createContext()

const UsersProvider = ({ children }) => {
    //const { response: users, error, isLoading } = useFetch(url)
    const [users, setUsers] = useState(usersArrayAddTagProperty)
    const [searchedUsers, setSearchedUsers] = useState(users)


    return (
        <UsersContext.Provider value={{ users, setUsers, searchedUsers, setSearchedUsers }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsersGlobalContext = () => {
  return useContext(UsersContext)
}

export { UsersContext, UsersProvider }

