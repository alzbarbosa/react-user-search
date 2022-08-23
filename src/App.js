import UserList from "./components/user-list/user-list.component";
import SearchForm from "./components/search-form/search-form.component";
import Loading from "./components/loading/loading.component";

import { useUsersGlobalContext } from "./context/UsersContext";

function App() {
  const { searchedUsers, error, isLoading } = useUsersGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Something went wrong. Please try again.</h3>;
  }

  return (
    <div className="app-container">
      <SearchForm />
      <div className="user-list-container">
        <UserList users={searchedUsers} />
      </div>
    </div>
  );
}

export default App;
