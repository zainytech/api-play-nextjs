import { NextResponse } from "next/server";

export const GET = async(req,{params}) =>{
    const id= params.id;
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await response.json();
        // console.log("data",data);
        return NextResponse.json(data);
    } catch(error){
        return NextResponse.json(error);
    }
}