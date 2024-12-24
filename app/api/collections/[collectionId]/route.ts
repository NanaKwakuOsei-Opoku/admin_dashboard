import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/mongoDB";


export const GET = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  // No auth check needed for GET - keeping it as is
  try {
    await connectToDB();
    // Rest of the GET code remains the same...
  } catch (err) {
    // Error handling remains the same...
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = getAuth(req);  // Changed from auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Rest of the POST code remains the same...
  } catch (err) {
    // Error handling remains the same...
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = getAuth(req);  // Changed from auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Rest of the DELETE code remains the same...
  } catch (err) {
    // Error handling remains the same...
  }
};

export const dynamic = "force-dynamic";