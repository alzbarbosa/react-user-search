import { createContext, useState, useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const url = "https://api.hatchways.io/assessment/students";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const { response: studentsData, error, isLoading } = useFetch(url);

  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    let newUsers;
    if (isLoading) {
      newUsers = [];
    } else
      newUsers = studentsData.students.map((user) => ({
        ...user,
        tag: [],
      }));
    setUsers(newUsers);
    setSearchedUsers(newUsers);
  }, [isLoading]);

  return (
    <UsersContext.Provider
      value={{ users, setUsers, searchedUsers, setSearchedUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersGlobalContext = () => {
  return useContext(UsersContext);
};

export { UsersContext, UsersProvider };
