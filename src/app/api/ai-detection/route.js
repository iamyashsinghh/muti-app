import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { text } = await req.json();

  if (!text) {
    return NextResponse.json({ error: "No text provided" }, { status: 400 });
  }

  try {
    const ZEROGPT_API_KEY = "e7422e16-d8e4-457a-b3c0-7cb3def9dfef";

    const response = await axios.post(
      "https://api.zerogpt.com/detect",
      { text },
      {
        headers: {
          Authorization: `Bearer ${ZEROGPT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { ai_probability, human_probability, highlighted_text } = response.data;

    return NextResponse.json({
      ai_probability,
      human_probability,
      highlighted_text,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error communicating with ZeroGPT API", details: error.message },
      { status: 500 }
    );
  }
}
