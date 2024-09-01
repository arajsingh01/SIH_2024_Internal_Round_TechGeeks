"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import ChatSystem from "@/components/chatsytem";

export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-blue-600 text-gray-800">
      <nav className="bg-blue-900 p-4">
        <div className="container flex justify-between items-center">
          <a href="#" className="text-white text-3xl font-bold pl-10"><img src="/images/logo.jpg" className="h-[60px] w-[300px]"></img></a>
          <div className="pr-10">
            <a href="#about" className="text-white mx-4 text-[20px] hover:font-extrabold">About Us</a>
            <a href="#faq" className="text-white mx-4 text-[20px] hover:font-extrabold">FAQ</a>
            <a href="#benefits" className="text-white mx-4 text-[20px] hover:font-extrabold">Benefits</a>
          </div>
        </div>
      </nav>

      <section className="bg-[url('https://t4.ftcdn.net/jpg/03/20/48/11/360_F_320481159_jHPOQEiPU26ZkjHeKIxV1sQyWQWMirCH.jpg')] bg-cover text-white text-center py-5 flex flex-row justify-evenly items-center ">
        <div className="w-[40vw]">
          <h1 className="text-5xl font-bold mb-4">Welcome to HealthInsight</h1>
          <p className="text-xl mb-8">To save time, faster growth, and provide the ideal patient Experience. Your gateway to personalized healthcare</p>
          <a className="bg-blue-900 text-white py-3 px-6 rounded-full text-lg hover:cursor-pointer mr-5 hover:bg-blue-800" onClick={() => router.push('/doclogin')}>Doctor's Login Now</a>
          <a className="bg-blue-900 text-white py-3 px-6 rounded-full text-lg hover:cursor-pointer hover:bg-blue-800" onClick={() => router.push('/patientlogin')}>Patient's Login Now</a>
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/004/206/700/original/doctor-with-female-patient-vector.jpg" alt="" className="h-[565px] w-[40vw] rounded-full" />
        </div>
      </section>

      <section id="about" className="py-8 bg-white">
        <div className="mx-20 text-left flex justify-evenly items-center">
          <div className="w-[500px]">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-8">Health Insights is dedicated to providing top-notch healthcare solutions tailored to both patients and doctors. We believe in accessible, high-quality care that empowers everyone involved.</p>
          </div>
          <div className="w-[500px]">
            <img src="https://img.freepik.com/free-vector/doctors-personalized-prescriptive-analytics_335657-1882.jpg" alt="About Us" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-[url('https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg')] bg-cover">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Benefits of Using HealthInsights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img src="https://img.freepik.com/premium-vector/vector-design-personalized-care-icon-style_1134108-10018.jpg" alt="Benefit 1" className="mx-auto mb-4 w-[80px] h-[80px]" />
              <h3 className="text-2xl font-bold mb-4">Personalized Care</h3>
              <p>Access tailored healthcare plans that cater specifically to your needs.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kVAi3XGFo2w5hHKPc5NVkhTn77BL0Xz6-A&s" alt="Benefit 2" className="mx-auto mb-4 w-[80px] h-[80px]" />
              <h3 className="text-2xl font-bold mb-4">Expert Doctors</h3>
              <p>Connect with experienced and highly qualified doctors from various specialties.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img src="https://img.freepik.com/premium-vector/customer-support-abstract-concept-vector-illustration_107173-24824.jpg?w=360" alt="Benefit 3" className="mx-auto mb-4 w-[80px] h-[80px]" />
              <h3 className="text-2xl font-bold mb-4">24/7 Access</h3>
              <p>Get healthcare support and consultation anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-8 bg-gray-100">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Explore Our Features</h2>
          <div className="flex flex-row justify-evenly">
            <div>
              <img src="https://img.freepik.com/premium-vector/doctor-vector-illustration_38694-150.jpg" alt="" className="h-[650px] w-[600px]" />
            </div>
            <div className="">
              <div className="bg-white p-5 rounded-lg shadow-md flex flex-row w-[700px]">
                <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-doctor-icon-png-image_1024938.jpg" alt="Feature 1" className="h-[160px] w-[120px]" />
                <div className="ml-[30px] text-left">
                  <h3 className="text-2xl font-bold mb-2">Enhanced Patient Management </h3>
                  <p> AI analyzes patient data to recommend personalized treatment plans and follow-up schedules and the system provides early warnings for potential health issues based on predictive analytics, enablingpreemptive care.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md flex flex-row w-[700px] my-4">
                <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-doctor-icon-png-image_1024938.jpg" alt="Feature 2" className="h-[160px] w-[120px]" />
                <div className="ml-[30px] text-left">
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Diagnostic Accuracy</h3>
                  <p> Utilizes cutting-edge AI algorithms to enhance diagnostic accuracy and predict patient outcomes more reliably and the AI system continuously learns and adapts from new data, improving its diagnostic capabilities over time </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md flex flex-row w-[700px]">
                <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-doctor-icon-png-image_1024938.jpg" alt="Feature 3" className="h-[160px] w-[120px]" />
                <div className="ml-[30px] text-left">
                  <h3 className="text-2xl font-bold mb-2">Integration of Diagnostics and Billing </h3>
                  <p> Integrates diagnostic tools with billing functions, reducing administrative overhead and improving accuracy and ensures that diagnostic results and billing information are updated in real-time, minimizing errors and streamlining workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-8 bg-[url('https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg')] bg-cover">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-2xl font-bold mb-2">How can I sign up?</h3>
              <p>Simply click on the "Login Now" button and choose either Patient or Doctor to start the registration process.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-2xl font-bold mb-2">What services do you offer?</h3>
              <p>We offer a wide range of services including virtual consultations, health monitoring, and personalized health plans.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-2xl font-bold mb-2">Is my data secure?</h3>
              <p>Yes, your privacy is our top priority. All data is encrypted and securely stored.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Health Insights. All Rights Reserved.</p>
        </div>
      </footer>

      <div className="z-40">
        <ChatSystem />
      </div>
    </div>
  );
}
