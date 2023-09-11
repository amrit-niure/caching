import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Post from '@/modal/postSchema'

export async function GET(req){
    try {
        await connectionDB()
        const posts = await Post.find({})
        if (!posts) {
            return NextResponse.json({ success: false, message: 'Post not found' }, { status: 400 });
        }
        revalidatePath(req.url)
        return NextResponse.json({ success:true, posts:posts}, { status: 200 });
    } catch (error) {
        console.log('Route error ',error)
    }
}