import React from 'react';
import Slider from 'react-slick';
import projects from './data';
import { Link } from 'react-router-dom';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.png';

const projectImages = [img1, img2, img3];

function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return ( 
    <div className="bg-blue-700 h-[100vh] py-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Projects Carousel</h2>
        <div className="w-full max-w-3xl mt-[8rem]">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-200 dark:border-gray-200">
                <img src={projectImages[index]} alt={`${project.name} logo`} className="w-32 h-32 mb-4" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-black">{project.name}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{project.projectOrigin}</p>
                <Link to={`/projects/${index}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">
                  View Details
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
