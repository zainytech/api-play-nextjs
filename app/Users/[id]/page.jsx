"use client"

import { useState, useEffect } from "react"

const User = ({params:{id}}) => {
  const [singleUser,setSingleUser] = useState({});
  const [userPosts,setUserPosts] = useState([]);

  useEffect(()=>{
    const fetchUser = async() =>{
        const response = await fetch(`/api/users/${id}`)
        const data= await response.json();
        setSingleUser(data);
    }
    const fetchPosts = async() =>{
      const response = await fetch(`/api/posts/${id}`)
      const data = await response.json();
      setUserPosts(data);
    }
    fetchUser();
    fetchPosts();

  },[])
//   console.log('useer',singleUser)
// console.log("posts",userPosts)
    return (
    <>
        <h1 className="text-center text-5xl font-bold pt-3">Single User</h1>
        <p>{singleUser.name}</p>
        <h1>All posts by this user</h1>
        {userPosts && userPosts.map((posts)=>(
          <>
          <p>title:{posts.title}</p>
          <p>body:{posts.body}</p>
          </>
        ))}

    </>
    
  )
}

export default User