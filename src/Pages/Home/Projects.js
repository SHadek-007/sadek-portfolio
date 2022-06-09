import React from "react";
import img1 from '../../assets/projects/Monota-AutoParts.png';
import img2 from '../../assets/projects/Car Manager.png';
import img3 from '../../assets/projects/Denti Care.png';

const Projects = () => {
  return (
        <div className="px-5 md:px-28 mb-20">
      <h1 className="text-4xl text-center font-bold f-style pt-10 mb-16">
        My Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card max-w-xl bg-base-100 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Monota AutoParts"
            />
          </figure>
          <div className="card-body bg-slate-200">
            <h2 className="card-title">
              Monota AutoParts
              <div className="badge badge-secondary">Full Stack</div>
            </h2>
            <p className="text-justify">A Responsive, Fully-Functional Car Parts Manufacturer Website. Allowing Customers to Create an
Account, Browse Products, Buy Products, Delete Products, Stripe Payment, & Write Reviews.</p>
            <div className="card-actions justify-center font-semibold">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Node.js</div>
              <div className="badge badge-outline">Express.js</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Tailwind</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">Heroku</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://monota-auto-parts.web.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32">Details</button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-xl">
          <figure>
            <img
              src={img2}
              alt="Car Manager"
            />
          </figure>
          <div className="card-body bg-slate-200">
            <h2 className="card-title">
              Car Manager
              <div className="badge badge-secondary">Full Stack</div>
            </h2>
            <p className="text-justify">Car Manager is a Warehouse Management Responsive Full-Stack Website. Users can Create an Account, Stock Update, Add Products, Delete Products, and Manage Products.</p>
            <div className="card-actions justify-center font-semibold">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Node.js</div>
              <div className="badge badge-outline">Express.js</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">BootStrap</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">Heroku</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://car-manager-client.web.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32">Details</button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Denti Care"
            />
          </figure>
          <div className="card-body bg-slate-200">
            <h2 className="card-title">
              Denti Care
              <div className="badge badge-secondary">Front End</div>
            </h2>
            <p className="text-justify">Denti Care is a Dentist Website for a Single Doctor and He Provides Various Tooth Services. User Can Book any Service, Doctor Show Her Service, it is Static Website.</p>
            <div className="card-actions justify-center font-semibold ">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">React BootStrap</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">Social Login</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://react-denticare.web.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
