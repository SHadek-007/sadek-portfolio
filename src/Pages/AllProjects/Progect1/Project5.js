import React from 'react';
import img1 from '../../../assets/project details/project5/perfume1.png';
import img2 from '../../../assets/project details/project5/perfume2.png';
import img3 from '../../../assets/project details/project5/perfume3.png';

const Project5 = () => {
    return (
        <div className="card max-w-sm md:max-w-xl bg-base-100 shadow-md rounded-md border mx-auto my-10">
      <figure>
        <div class="carousel max-w-sm md:max-w-xl max-h-80">
          <div id="slide1" class="carousel-item relative max-w-sm md:max-w-xl">
            <div>
              <img src={img1} className="max-w-sm md:max-w-xl" alt="" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative max-w-sm md:max-w-xl">
            <div>
              <img src={img2} class="max-w-sm md:max-w-xl" alt="" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative max-w-sm md:max-w-xl">
            <div>
              <img src={img3} class="max-w-sm md:max-w-xl" alt="" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body bg-slate-100">
        <h2 className="card-title">
          Perfume World
          <div className="badge badge-secondary">Front End</div>
        </h2>
        <p className="text-justify">
          <small>
          ● Perfume World is a Product Analysis and Ecommerce  Website. User Can add reviews. Users see Product Analysis Web Charts. it is a Static Website.
          </small>
        </p>

        <p className="text-justify">
          <small>
          ● User Can Add Reviews, it is Static Website.
          </small>
        </p>
        <p className="text-justify"><small>● Super Fast Data Load, No Relode Issue.</small></p>
        <div className="card-actions justify-center font-semibold mt-5">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">React Router</div>
          <div className="badge badge-outline">ReactChart</div>
          <div className="badge badge-outline">React BootStrap</div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success mr-5">
            <a href="https://phero-assignment9-perfume-world.netlify.app/" target={"_blank"}>
              Live Site
            </a>
          </button>
          <a
            href="https://github.com/SHadek-007/perfume-world-front-end"
            target={"_blank"}
          >
            <button className="btn btn-success mr-5 mt-5">GitHub Code Link</button>
          </a>
          
        </div>
      </div>
    </div>
    );
};

export default Project5;