import React, { Fragment, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

const SendMail = () => {
  const [formData, setFormData] = useState({});
  const [sending, setSending] = useState(false);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async(e) => {
    e.preventDefault();

    const { name, email, message, subject } = formData;

    if (!name || !email || !subject || !message) {
      return alert("Please Fill All Data");
    }

    setSending(true);
    let a = await fetch("/api/mail", { method: "POST", body: JSON.stringify(formData), headers: { 'content-type': 'application/json' } })
    let b = await a.json();
    console.log(b)
    if(!b.success){
      console.log("error occurred");
        setSending(false);
        alert("error occurred");
    }
    console.log(b.message);
        setSending(false);
        alert("Message Sended Successfully");
        setFormData({});
  };

  return (
    <Fragment>
      <div id='getInTouch'>
        <div className="py-8 pt-4 shadow-zinc-300 shadow-sm bg-[url('https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg')] bg-cover">
          <h3 className='text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3 text-white'>
            <span className='mr-1'>
              <FiMessageCircle />
            </span>
            Drop A Message to patient/doctor
          </h3>

          <form action='' onSubmit={sendMessage}>
            <div className='flex flex-col gap-4 w-[90%] md:w-[35%] m-auto'>
              <input
                className=' border-[#c72c6c] p-2 rounded'
                id='name'
                name='name'
                onChange={collectData}
                placeholder='Your Good Name'
                value={formData.name || ""}
              />
              <input
                className=' border-[#c72c6c] p-2 rounded'
                id='email'
                name='email'
                onChange={collectData}
                placeholder='Email Address'
                value={formData.email || ""}
              />
              <input
                className=' border-[#c72c6c] p-2 rounded'
                id='subject'
                name='subject'
                onChange={collectData}
                placeholder='Subject for mail'
                value={formData.subject || ""}
              />

              <textarea
                className=' border-[#c72c6c] p-2 rounded'
                id='message'
                name='message'
                onChange={collectData}
                placeholder='Write Your Message'
                rows='3'
                value={formData.message || ""}
              />

              <button
                className='font-bold text-white disabled:cursor-default p-2 rounded bg-[#f91071] hover:bg-[#c72c6c]'
                disabled={sending}
                type='submit'
              >
                {sending ? "sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SendMail;