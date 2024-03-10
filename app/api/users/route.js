import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return NextResponse.json(data)
        // return new Response(data)
    } catch (error) {
        return NextResponse.json(error)
        // return new Response(error)
    }
}