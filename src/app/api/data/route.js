import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Post from '@/modal/postSchema'
import { revalidatePath } from 'next/cache'; 

export async function GET(req){
    try {
        const path = req.nextUrl.searchParams.get('path') || "/"
        await connectionDB()
        const posts = await Post.find({})
        if (!posts) {
            return NextResponse.json({ success: false, message: 'Post not found' }, { status: 400 });
        }
        revalidatePath(path)
        return NextResponse.json({ success:true, posts:posts}, { status: 200 });
    } catch (error) {
        console.log('Route error ',error)
    }
}