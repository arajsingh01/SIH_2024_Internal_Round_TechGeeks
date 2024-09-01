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
        if (val.Pregnancies.length === 0 || val.Glucose.length === 0 || val.BloodPressure.length === 0 || val.SkinThickness.length === 0 || val.Insulin.length === 0 || val.BMI.length === 0 || val.DiabetesPedigreeFunction.length === 0 || val.Age.length === 0) {
            toast.error('field is empty', { position: "top-right", autoClose: 2000 })
        }
        else {
            const url = "http://localhost:5000/predict_diabetes";
            const jsonData = JSON.stringify(val);
            let a = await fetch(url, { headers: { Accept: "application/json", "Content-Type": "application/json", }, method: "POST", body: jsonData })
                .then((response) => response.json())
                .then((response) => {
                    setResult(response.Diabetes);
                });
            toast('Data is submitted', { position: "top-right", autoClose: 3000 })
            ref.current.reset()
        }
    }

    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeVnxemndlfHR2DfLteD7_ZW_UNQo7NYNoA&s')] bg-cover">
            <ToastContainer position="top-right" autoClose={3000} />
            <NavBar />

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
                <h2 className="text-red-600 text-[32px] font-bold mb-6 text-center">DIABETES</h2>

                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12" onSubmit={handleSubmit(onSubmit)} ref={ref} >
                    <div>
                        <label for="pregnancies" className="block text-sm font-medium text-gray-700">Pregnancies</label>
                        <input id="pregnancies" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter number of pregnancies" {...register("Pregnancies")} />
                    </div>

                    <div>
                        <label for="glucose" className="block text-sm font-medium text-gray-700">Glucose</label>
                        <input id="glucose" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter glucose level" {...register("Glucose")} />
                    </div>

                    <div>
                        <label for="skin-thickness" className="block text-sm font-medium text-gray-700">Blood Pressure</label>
                        <input id="skin-thickness" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Blood Pressure" {...register("BloodPressure")} />
                    </div>

                    <div>
                        <label for="skin-thickness" className="block text-sm font-medium text-gray-700">Skin Thickness</label>
                        <input id="skin-thickness" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter skin thickness" {...register("SkinThickness")} />
                    </div>

                    <div>
                        <label for="insulin" className="block text-sm font-medium text-gray-700">Insulin</label>
                        <input id="insulin" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter insulin level" {...register("Insulin")} />
                    </div>

                    <div>
                        <label for="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                        <input id="bmi" type="number" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter BMI" {...register("BMI")} />
                    </div>

                    <div>
                        <label for="diabetes-pedigree" className="block text-sm font-medium text-gray-700">Diabetes Pedigree Function</label>
                        <input id="diabetes-pedigree" type="number" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter pedigree function" {...register("DiabetesPedigreeFunction")} />
                    </div>


                    <div>
                        <label for="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input id="age" type="number" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter age" {...register("Age")} />
                    </div>



                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                    </div>
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