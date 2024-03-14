import axios from "axios";
import { useEffect, useRef, useState } from "react"


const loadUsers = async( page: number = 1): Promise<User[]> => {
    try{
        const { data } = await axios.get<reqresUserListResponse>('https://reqres.in/api/users',{
            params:{
                page:page
            }
        });
        return data.data;
    }catch(error){
        console.log(error)
        return  [];
    }
}


const usersPage = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);


    useEffect (() => {
        
        loadUsers(currentPageRef.current).then( setUsers );
    }, [])
    
    const nextPage = async() =>{
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if(users.length > 0){
            setUsers(users);
        }else{
            currentPageRef.current--;
        
        }
    }
    const prevPage =  async() =>{
        if(currentPageRef.current <  1) return;
        
        if(currentPageRef.current > 1){
            currentPageRef.current--;
            const users = await loadUsers(currentPageRef.current);
            setUsers(users);
        }
        

    }

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
        <div>
        <button onClick={prevPage}>prew</button>
        <button onClick={nextPage}>next</button>
        </div>
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