import UserList from './components/user-list/user-list.component';
import SearchForm from './components/search-form/search-form.component'

import { useUsersGlobalContext} from "./context/UsersContext"

function App() {
    const { searchedUsers, error, isLoading } = useUsersGlobalContext()

  return (
    <div className='app-container'>
    <SearchForm />
    <div className='user-list-container'>
      <UserList users={searchedUsers} error={error} isLoading={isLoading} />
    </div>
    </div>
  );
}

export default App;
