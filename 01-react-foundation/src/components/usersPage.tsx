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
        
        loadUsers().then( setUsers );
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
                {
                  users.map(user=>(
                    <UserRow key={user.id} user={user}/>
                  ))
                }
                
            </tbody>
        </table>
    </>
  )
}

export default usersPage

interface Props {
    user: User;
}

export const UserRow = ({user}: Props)=>{

    const {avatar, first_name, last_name, email} = user;

    return (
        <tr key={user.id}>
        <td> <img style={{width:'50px'}} src={avatar} alt="user Avatar"/></td>
        <td>{ first_name} {last_name}</td>
        <td>{email}</td>
    </tr>
    )
}