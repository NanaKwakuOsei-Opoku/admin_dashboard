import { connectToDB } from "@/lib/models/mongoDB";
import { getAuth } from "@clerk/nextjs/server";  // Changed to getAuth
import { NextRequest, NextResponse } from "next/server";
import Collection from "@/lib/models/Collection";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = getAuth(req)  // Using getAuth instead of auth

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await connectToDB()

    const { title, description, image } = await req.json()

    const existingCollection = await Collection.findOne({ title, userId })

    if (existingCollection) {
      return new NextResponse("Collection already exists", { status: 400 })
    }

    if (!title || !image) {
      return new NextResponse("Title and image are required", { status: 400 })
    }

    const newCollection = await Collection.create({
      title,
      description,
      image,
    })

    await newCollection.save()

    return NextResponse.json(newCollection, { status: 201 })
    
  } catch (err) {
    console.error("[collections_POST]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}