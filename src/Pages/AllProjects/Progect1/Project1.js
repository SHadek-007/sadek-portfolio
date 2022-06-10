import React from 'react';
import img1 from '../../../assets/project details/Screenshot_82.png';
import img2 from '../../../assets/project details/Screenshot_81.png';
import img3 from '../../../assets/project details/monota auto parts details.png';

const Project1 = () => {
    return (
        <div className="card max-w-sm md:max-w-xl bg-base-100 shadow-md rounded-md border mx-auto my-10">
          <figure>

          <div class="carousel max-w-sm md:max-w-xl max-h-80">
  <div id="slide1" class="carousel-item relative max-w-sm md:max-w-xl">
  <div>
  <img src={img1} className='max-w-sm md:max-w-xl' alt='' />
  </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative max-w-sm md:max-w-xl">
  <div>
  <img src={img2}  class="max-w-sm md:max-w-xl" alt='' />
  </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative max-w-sm md:max-w-xl">
  <div>
  <img src={img3} class="max-w-sm md:max-w-xl" alt='' />
  </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

          </figure>
          <div className="card-body bg-slate-100">
            <h2 className="card-title">
              Monota AutoParts
              <div className="badge badge-secondary">Full Stack</div>
            </h2>
            <p className="text-justify"><small>● Monota AutoParts - Get Tools for Your Dream Car. This is a Manufacturer Management MERN Stack Website. You Can Manage Your Manufacturer Tools with this. It is very easy to use. It is a best choose for your Manufacturer Products.</small></p>
            <p className="text-justify"><small>● A Responsive, Fully-Functional Car Parts Manufacturer Website. Allowing Customers to Create an Account, Browse Products, Buy Products, Delete Products, Stripe Payment, & Write Reviews.</small></p>

            <p className="text-justify"><small>●Admins can Add New Products, Remove existing Products, Remove Unpaid User Products, Update Shipping Status, and Create New Admin Accounts.</small></p>
            <p className="text-justify"><small>● Google Sign in & Sign up, GitHub Sign in & Sign up, Super Fast Data Load, No Relode Issue.</small></p>
            <p className="text-justify"><small>● Using Json Web Token, Protected Route Use, Using React Router.</small></p>
            

            <div className="card-actions justify-center font-semibold mt-5">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Node.js</div>
              <div className="badge badge-outline">Express.js</div>
              <div className="badge badge-outline">MongoDB</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">React Router</div>
              <div className="badge badge-outline">Firebase</div>
              <div className="badge badge-outline">Heroku</div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-success mr-5"><a href="https://monota-auto-parts.web.app/" target={'_blank'}>Live Site</a></button>
                <a href="https://github.com/SHadek-007/monota-autoParts-fullStack" target={'_blank'}><button className="btn btn-success mr-5 mt-5">Client Side</button></a>
                <a href="https://github.com/SHadek-007/monota-autoParts-server" target={'_blank'}><button className="btn btn-success mr-5 mt-5">Server Side</button></a>
            </div>
          </div>
        </div>
    );
};

export default Project1;