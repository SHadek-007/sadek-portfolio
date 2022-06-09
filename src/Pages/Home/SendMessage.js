import React from "react";
import contactPhoto from '../../assets/img/Call center-amico.png';

const SendMessage = () => {
  return (
    <div className="px-5 md:px-28 mb-20">
      <h1 className="text-4xl text-center font-bold f-style pt-10 mb-16">
        Get In <span className="text-secondary">Touch</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
            <img className="w-96" src={contactPhoto} alt="" />
        </div>
        <div>
            <form  className="">
            <input type="text" placeholder="Name" class="input input-bordered w-full max-w-md" />
            <input type="text" placeholder="Email" class="mt-5 input input-bordered w-full max-w-md" />
            <input type="text" placeholder="Subject" class="mt-5 input input-bordered w-full max-w-md" /> <br />
            <textarea class=" mt-5 mb-5 textarea textarea-bordered w-full max-w-md" placeholder="Message"></textarea><br />
            <input className="btn btn-primary btn-outline" type="submit" value="Send Message" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
