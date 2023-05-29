import { CreatePhotoSchema } from "@/components/upload/upload-photo-form";
import { db } from "@/db/db";
import { photos } from "@/db/schema/photos";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: CreatePhotoSchema = await req.json();

  const { name, url, description } = body;

  try {
    await db.insert(photos).values({
      userId: "hieu",
      name,
      url,
      description,
    });

    return NextResponse.json({ message: "Create success" });
  } catch (e) {
    console.log(e);
  }
}
