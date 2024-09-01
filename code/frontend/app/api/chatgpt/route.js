import { NextResponse} from "next/server";
import axios from "axios";

export async function POST(req) {
    const project = await req.json()
    const query  = project.question

    const options = {
        method: "POST",
        url: "https://chatgpt-api8.p.rapidapi.com/",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": '33d53f9e4cmsh83547ba74d1618ap16d30djsn613019a23e2a',
            "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
        },
        data: [
            {
                content: query,
                role: "user",
            },
        ],
    };
    const { data } = await axios.request(options)
    return NextResponse.json({ success: true, answer: data.text })
}