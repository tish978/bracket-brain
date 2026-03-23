import { NextResponse } from "next/server";
import { getRandomQuestions } from "@/lib/questions";

export async function GET() {
  const questions = getRandomQuestions(5);
  return NextResponse.json(questions);
}
