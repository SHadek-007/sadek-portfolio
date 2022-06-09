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
        <div class="card max-w-xl bg-base-100 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Monota AutoParts"
            />
          </figure>
          <div class="card-body bg-slate-200">
            <h2 class="card-title">
              Monota AutoParts
              <div class="badge badge-secondary">Full Stack</div>
            </h2>
            <p className="text-justify">A Responsive, Fully-Functional Car Parts Manufacturer Website. Allowing Customers to Create an
Account, Browse Products, Buy Products, Delete Products, Stripe Payment, & Write Reviews.</p>
            <div class="card-actions justify-center font-semibold">
              <div class="badge badge-outline">React</div>
              <div class="badge badge-outline">Node.js</div>
              <div class="badge badge-outline">Express.js</div>
              <div class="badge badge-outline">MongoDB</div>
              <div class="badge badge-outline">Tailwind</div>
              <div class="badge badge-outline">MongoDB</div>
              <div class="badge badge-outline">Firebase</div>
              <div class="badge badge-outline">Heroku</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://monota-auto-parts.web.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32">Details</button>
            </div>
          </div>
        </div>

        <div class="card w-lg bg-base-100 shadow-xl">
          <figure>
            <img
              src={img2}
              alt="Car Manager"
            />
          </figure>
          <div class="card-body bg-slate-200">
            <h2 class="card-title">
              Car Manager
              <div class="badge badge-secondary">Full Stack</div>
            </h2>
            <p className="text-justify">Car Manager is a Warehouse Management Responsive Full-Stack Website. Users can Create an Account, Stock Update, Add Products, Delete Products, and Manage Products.</p>
            <div class="card-actions justify-center font-semibold">
              <div class="badge badge-outline">React</div>
              <div class="badge badge-outline">Node.js</div>
              <div class="badge badge-outline">Express.js</div>
              <div class="badge badge-outline">MongoDB</div>
              <div class="badge badge-outline">BootStrap</div>
              <div class="badge badge-outline">MongoDB</div>
              <div class="badge badge-outline">Firebase</div>
              <div class="badge badge-outline">Heroku</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://car-manager-client.web.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32">Details</button>
            </div>
          </div>
        </div>

        <div class="card w-lg bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Denti Care"
            />
          </figure>
          <div class="card-body bg-slate-200">
            <h2 class="card-title">
              Denti Care
              <div class="badge badge-secondary">Front End</div>
            </h2>
            <p className="text-justify">Denti Care is a Dentist Website for a Single Doctor and He Provides Various Tooth Services. User Can Book any Service, Doctor Show Her Service, it is Static Website.</p>
            <div class="card-actions justify-center font-semibold ">
              <div class="badge badge-outline">React</div>
              <div class="badge badge-outline">React BootStrap</div>
              <div class="badge badge-outline">MongoDB</div>
              <div class="badge badge-outline">Firebase</div>
              <div class="badge badge-outline">Social Login</div>
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
