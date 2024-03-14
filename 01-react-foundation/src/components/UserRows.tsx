

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
