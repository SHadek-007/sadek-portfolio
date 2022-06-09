import React from "react";
import emailjs from '@emailjs/browser';
import contactPhoto from '../../assets/img/Call center-amico.png';
import toast, { Toaster } from "react-hot-toast";


const SendMessage = () => {
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_bnzmv59', 'template_whdlavd', e.target, 'JkSZhoILpGOqjdGrw')
      .then((result) => {
          toast.success('Email Send Successfully');
      }, (error) => {
        toast.error('Email Send Not Successfully');
      });
      e.target.reset();
  };
  return (
    <div className="px-5 md:px-28 mb-20">
      <h1 className="text-4xl text-center font-bold f-style pt-10 mb-16">
        Get In <span className="text-secondary">Touch</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >
            <img className="w-96" src={contactPhoto} alt="" />
        </div>
        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        >
            <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-md" required/>
            <input type="email" name="email" placeholder="Email" className="mt-5 input input-bordered w-full max-w-md" required/>
            <input type="text" name="subject" placeholder="Subject" className="mt-5 input input-bordered w-full max-w-md" required/> <br />
            <textarea name="message" className=" mt-5 mb-5 textarea textarea-bordered w-full max-w-md" placeholder="Message" required></textarea><br />
            <input className="btn btn-primary btn-outline" type="submit" value="Send Message" />
            </form>
        </div>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default SendMessage;
