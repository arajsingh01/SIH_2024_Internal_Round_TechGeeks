"use client"
import React, { Fragment, useState } from "react";
import SendMail from "@/components/sendmail";
import { useRouter } from 'next/navigation'
import NavBar from "@/components/NavBar";
import YouTube from "@/components/youtube";

const page = () => {
    const router = useRouter()
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [questionPreview, setQuestionPreview] = useState("");
    const [answer, setAnswer] = useState();
    const [history, setHistory] = useState([]);

    const enterHit = (e) => {
        if (e.key === "Enter") {
            generateAnswer();
        }
    };

    const generateAnswer = async () => {
        try {
            setLoading(true);
            setQuestionPreview(question);
            setQuestion("");
            setAnswer("");
            let a = await fetch("/api/chatgpt", { method: "POST", body: JSON.stringify({ question: question }), headers: { 'content-type': 'application/json' } })
            let data = await a.json();
            if (!data.success) {
                alert(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setAnswer(data.answer);
            setHistory([{ question, answer: data.answer }, ...history]);
        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.message || error);
        }
    };

    return (
        <div>
            <NavBar />

            <div className="py-10 pt-4 shadow-zinc-300 shadow-sm bg-[url('https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg')] bg-cover text-[30px] text-white text-center font-extrabold align-middle pt-10">
                WELCOME !!!
            </div>


            <Fragment>
                <div className="min-h-[82vh]">
                    <h1 className="text-3xl font-bold text-center pt-5">Ask Any question related to your health</h1>
                    <div className="w-[92%] sm:w-[50%] m-auto mt-6">
                        <div className="inputWrapper flex justify-around">
                            <input
                                className=" p-3 py-1.5 rounded text-lg block w-[100%] border border-solid border-gray-500 h-[100px]"
                                id="question"
                                name="question"
                                onChange={(e) => setQuestion(e.target.value)}
                                onKeyDown={enterHit}
                                placeholder="Ask any question..."
                                type="text"
                                value={question}
                            />
                        </div>

                        <div className="mt-8 pb-5 text-[20px]">
                            {questionPreview && (
                                <div>
                                    {" "}
                                    <p>Q. {questionPreview}</p>
                                    <p>{loading ? "Generating..." : "Ans => " + answer}</p>
                                </div>
                            )}

                            {answer !== ""
                                ? history
                                    .filter((data, key) => key !== 0)
                                    .map((data, key) => (
                                        <div className="mt-5" key={key}>
                                            <p>{"Q. " + data.question}</p>
                                            <div>{"Ans => " + data.answer}</div>
                                        </div>
                                    ))
                                : history.map((data, key) => (
                                    <div className="mt-5" key={key}>
                                        <p>{"Q. " + data.question}</p>
                                        <div>{"Ans => " + data.answer}</div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="sm:hidden flex justify-center w-[100%] fixed bottom-10">
                        <button
                            className="p-2 px-5 dark:bg-[#286969] bg-[#c72c6c] font-bold text-white rounded sm:ml-5"
                            onClick={generateAnswer}
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </Fragment>

            <YouTube/>

            <SendMail />

            <footer className="bg-black text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 HealthInsights. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default page