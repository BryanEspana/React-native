import axios from "axios";
import { useEffect, useState } from "react"


const loadUsers = async(): Promise<User[]> => {
    try{
        const { data } = await axios.get<reqresUserListResponse>('https://reqres.in/api/users');
        return data.data;
    }catch(error){
        console.log(error)
        return  [];
    }
}


const usersPage = () => {
    
    const [users, setUsers] = useState<User[]>([]);



    useEffect (() => {
        
        loadUsers().then( users => setUsers(users));
    }, [])
    

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
                <tr>
                    <td>
                        
                    </td>
                    <td>Nombre</td>
                    <td>Email</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default usersPage
