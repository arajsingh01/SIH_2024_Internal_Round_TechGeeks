"use client"
import React from 'react'
import NavBar from '@/components/NavBar'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";

const page = () => {
    const { register, handleSubmit, setValue } = useForm();
    const ref = useRef()
    const [Result, setResult] = useState("")

    const onSubmit = async (val) => {
        if (val.I_beta_HCG.length === 0 || val.II_beta_HCG.length === 0 || val.AMH.length===0) {
            toast.error('field is empty', { position: "top-right", autoClose: 2000 })
        }
        else {
            const url = "http://localhost:5000/predict_pcos";
            const jsonData = JSON.stringify(val);
            let a = await fetch(url, {headers: {Accept: "application/json","Content-Type": "application/json",}, method: "POST", body: jsonData})
                .then((response) => response.json())
                .then((response) => {
                    setResult(response.PCOS);
                });
            toast('Data is submitted', { position: "top-right", autoClose: 3000 })
            ref.current.reset()
        }
    }

    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeVnxemndlfHR2DfLteD7_ZW_UNQo7NYNoA&s')] bg-cover">
            <ToastContainer position="top-right" autoClose={3000} />
            <NavBar />

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
                <h2 className="text-red-600 text-[32px] font-bold mb-6 text-center">Polycystic ovary syndrome(PCOS)</h2>
                <form onSubmit={handleSubmit(onSubmit)} ref={ref} >
                    <div className="grid gap-4">
                        <div className="flex flex-col">
                            <label for="betaHCG1" className="mb-2 font-medium text-gray-700">1 beta-HCG (mIU/mL)</label>
                            <input type="number" id="betaHCG1" name="betaHCG1" className="border border-gray-300 rounded-lg p-2" placeholder="Enter 1 beta-HCG value" {...register("I_beta_HCG")} step="0.01"/>
                        </div>

                        <div className="flex flex-col">
                            <label for="betaHCG11" className="mb-2 font-medium text-gray-700">11 beta-HCG (mIU/mL)</label>
                            <input type="number" id="betaHCG11" name="betaHCG11" className="border border-gray-300 rounded-lg p-2" placeholder="Enter 11 beta-HCG value" {...register("II_beta_HCG")} step="0.01"/>
                        </div>

                        <div className="flex flex-col">
                            <label for="AMH" className="mb-2 font-medium text-gray-700">AMH (ng/ml)</label>
                            <input type="number" id="AMH" name="AMH" className="border border-gray-300 rounded-lg p-2" placeholder="Enter AMH value" {...register("AMH")} step="0.01"/>
                        </div>
                    </div>

                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">
                        Submit
                    </button>
                </form>
            </div>


            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
                <h2 className="text-red-600 text-[32px] font-bold mb-6 text-center">RESULT</h2>
                <h2 className="text-pink-600 text-[32px] font-bold mb-6 text-center">{Result}</h2>
            </div>

            <footer className="bg-black text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 HealthInsights. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default page