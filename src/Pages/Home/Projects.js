import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/projects/Monota-AutoParts.png';
import img2 from '../../assets/projects/Car Manager.png';
import img3 from '../../assets/projects/Denti Care.png';
import img4 from '../../assets/projects/red onion.png';
import img5 from '../../assets/projects/perfume world.png';
import img6 from '../../assets/projects/phone hunter.png';

const Projects = () => {
  return (
        <div id='projects' className="px-5 md:px-28 mb-20">
      <h1 className="text-4xl text-center font-bold f-style pt-10 mb-16">
        My Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="2000"
      >
        <div className="card max-w-xl bg-base-100 shadow-md rounded-md border">
          <figure>
            <img
              src={img1}
              alt="Monota AutoParts"
            />
          </figure>
          <div className="card-body bg-slate-100">
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
                <button className="btn btn-success w-32"> <Link to={'/project1'}>Details</Link></button>
               
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-md rounded-md border">
          <figure>
            <img
              src={img2}
              alt="Car Manager"
            />
          </figure>
          <div className="card-body bg-slate-100">
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
                <button className="btn btn-success w-32"><Link to={'/project2'}>Details</Link></button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-md rounded-md border">
          <figure>
            <img
              src={img3}
              alt="Denti Care"
            />
          </figure>
          <div className="card-body bg-slate-100">
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
                <button className="btn btn-success w-32"><Link to={'/project3'}>Details</Link></button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-md rounded-md border">
          <figure>
            <img
              src={img4}
              alt="Red Onion"
            />
          </figure>
          <div className="card-body bg-slate-100">
            <h2 className="card-title">
              Red Onion
              <div className="badge badge-secondary">Front End</div>
            </h2>
            <p className="text-justify">Red Onion is a Restaurant Website. This Restaurant Provides Breakfast, Lunch, and Dinner Meals. Users Can See All Meals Menu, Users Can Book any Meals, No Loading Issue it is a Static Website.</p>
            <div className="card-actions justify-center font-semibold ">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">React BootStrap</div>
              <div className="badge badge-outline">Private Route</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">Social Login</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://react-red-onion.netlify.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32"><Link to={'/project4'}>Details</Link></button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-md rounded-md border">
          <figure>
            <img
              src={img5}
              alt="Perfume World"
            />
          </figure>
          <div className="card-body bg-slate-100">
            <h2 className="card-title">
              Perfume World
              <div className="badge badge-secondary">Front End</div>
            </h2>
            <p className="text-justify">Perfume World is a Product Analysis and Ecommerce  Website. User Can add reviews. Users see Product Analysis Web Charts. it is a Static Website.</p>
            <div className="card-actions justify-center font-semibold ">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">React BootStrap</div>
              <div className="badge badge-outline">React Router</div>
              <div className="badge badge-outline">Netlify</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://phero-assignment9-perfume-world.netlify.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32"><Link to={'/project5'}>Details</Link></button>
            </div>
          </div>
        </div>

        <div className="card w-lg bg-base-100 shadow-md rounded-md border ">
          <figure>
            <img
              src={img6}
              alt="Phone Gallery"
            />
          </figure>
          <div className="card-body bg-slate-100">
            <h2 className="card-title">
            Phone Gallery
              <div className="badge badge-secondary">Front End</div>
            </h2>
            <p className="text-justify">Phone Gallery is a Phone information Website. Users can Search for a Dream Phone in this Search Feild. Users can see phones, smart watches, Tablets' prices, descriptions, photos, etc. it is Static Website.</p>
            <div className="card-actions justify-center font-semibold ">
              <div className="badge badge-outline">HTML</div>
              <div className="badge badge-outline">CSS</div>
              <div className="badge badge-outline">BootStrap</div>
              <div className="badge badge-outline">JavaScript</div>
              <div className="badge badge-outline">Netlify</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5 w-32"><a href="https://phero-assignment6-phone-gallery.netlify.app/" target={'_blank'}>Live Site</a></button>
                <button className="btn btn-success w-32"><Link to={'/project6'}>Details</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
