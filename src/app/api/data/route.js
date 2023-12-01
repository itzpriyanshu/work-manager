import connectDB from "@/app/database/mongodb";
import Data from "@/app/models/data";
import {NextResponse} from "next/server";

export async function POST(request){
    const {title, desc} = await request.json()
    
    await connectDB()
    
    await Data.create({title, desc});
    return NextResponse.json({message: 'Created'},{status: 201})
}