import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRows';


export const usersPage = () => {
    
    const {users, nextPage, prevPage} = useUsers();

  return (
    <>
      <h3>Usuarios:</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            
            <tbody>
                {
                  users.map((user: User)=>(
                    <UserRow key={user.id} user={user}/>
                  ))
                }
                
            </tbody>
        </table>
        <div>
        <button onClick={prevPage}>prew</button>
        <button onClick={nextPage}>next</button>
        </div>
    </>
  )
}

export default usersPage
