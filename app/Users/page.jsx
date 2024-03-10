"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const UsersData = async() =>{
                const response= await fetch('/api/users');
                const data = await response.json();
                setUsers(data); 
          }
          UsersData();
          
    },[])
// console.log(users)
    return (
    <>
        <h1 className="text-center text-5xl font-bold pt-3">Users</h1>
        {users && users.map((user)=>{
          return(
            <>
              <Link href={`/Users/${user.id}`}><p id={users.id} className="text-center pt-2">{user.name}</p></Link>
            </>
          )
        })}
    </>
  )
}

export default Users