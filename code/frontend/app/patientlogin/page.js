"use client"

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
// import { Link} from "react-router-dom";
import { useRouter } from 'next/navigation'
import Link from "next/link";


export default function page() {
    const router = useRouter()
    const { register, handleSubmit, setValue } = useForm();
    const ref = useRef()


    const onSubmit = async (val) => {
        if (val.email.length === 0 && val.password.length === 0) {
            toast.error('fields are empty', { position: "top-right", autoClose: 2000 })
        }
        else if (val.password.length === 0) {
            toast.error('Password field is empty', { position: "top-right", autoClose: 2000 })
        }
        else if (val.email.length === 0) {
            toast.error('Email field is empty', { position: "top-right", autoClose: 2000 })
        }

        else {
            toast('successfully logged in', { position: "top-right", autoClose: 3000 })
            ref.current.reset()
            router.push('/patient')
        }
    }


    return (<>
        <ToastContainer position="top-right" autoClose={3000} />
        <div className=" h-screen bg-[url('/images/patientlogin.jpg')] bg-cover brightness-[.6] relative"></div>
        <div className="absolute top-1 flex justify-center items-center content-between flex-col w-full ">
            <div className="bg-red-700 text-white font-bold italic">
                NOTE: it is just a protype...therefore there is no need to create account....just enter anything in username and password and it will be loged in
            </div>
            <img src="/images/logo.jpg" alt="" className="w-[350px] h-[100px] mt-3" />
            <form className=" w-[400px] p-5 text-white rounded-xl my-5 shadow-[0px_0px_20px_5px] shadow-black backdrop-brightness-50" onSubmit={handleSubmit(onSubmit)} ref={ref} action="./api/data" method="post">
                <div className="text-[2rem]">SIGN IN</div>
                <div className="my-5">
                    <p>Enter Email Address</p>
                    <input {...register("email")} type="text" className="border-2 border-gray-500 rounded-xl w-full h-[40px] text-black px-5" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Enter Password</p>
                        <Link href="/forgotpassword" ><p className="text-blue-500 hover:cursor-pointer hover:font-bold">Forgot password</p></Link>
                    </div>
                    <input {...register("password")} type="text" className="border-2 border-gray-500 rounded-xl w-full h-[40px] text-black px-5" />
                </div>
                <button type="submit" className="my-5 w-full h-[40px] bg-orange-600 font-bold text-white">SIGN IN</button>
                <div className="w-full text-wrap text-[14px]">By continuing, you agree to HealthInSight's Conditions of Use and Privacy Notice.</div>
                <div className="flex items-center align-middle justify-between my-4">
                    <hr className="bg-white w-[5.2rem] h-[2px]" />
                    <p className="mx-3">New to HealthInSight?</p>
                    <hr className="bg-white w-[5.2rem] h-[2px]" />
                </div>
                <Link href="/signup" ><button type="button" className="my-5 w-full h-[40px] bg-green-600 font-bold text-white">Create your Patient's account</button>
                </Link>
            </form>
        </div>
    </>
    );
}
