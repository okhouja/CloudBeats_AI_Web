import { getImpressum } from "@/lib/getImpressum";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const data = await getImpressum();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch Impressum" },
      { status: 502 }
    );
  }
}
