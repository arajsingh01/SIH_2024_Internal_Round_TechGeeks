"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const NavBar = () => {
    const router = useRouter()
    return (
        <nav className="bg-blue-900 p-4">
            <div className="container flex justify-between items-center">
                <a href="#" className="text-white text-3xl font-bold pl-10"><img src="/images/logo.jpg" className="h-[60px] w-[300px]"></img></a>
                <div className="pr-10">
                    <a href="/#about" className="text-white mx-4 text-[20px] hover:font-extrabold">About Us</a>
                    <a href="/#faq" className="text-white mx-4 text-[20px] hover:font-extrabold">FAQ</a>
                    <a href="/#benefits" className="text-white mx-4 text-[20px] hover:font-extrabold">Benefits</a>
                    <a className="bg-blue-950 text-white py-3 px-6 rounded-full text-lg hover:cursor-pointer hover:bg-blue-800" onClick={() => router.push('/')}>Logout</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar