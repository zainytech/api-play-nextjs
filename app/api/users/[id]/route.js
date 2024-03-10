import { NextResponse } from "next/server"

export const GET = async(req,{params}) => {
    const id= params.id;
    try{
        // console.log("idget",id)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json();
        // console.log("datais",data)
        return NextResponse.json(data);
    } catch(error){
        return NextResponse.json(error);
    }
}