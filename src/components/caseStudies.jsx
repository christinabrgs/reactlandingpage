import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Coached from '../images/coached.svg'
import Explore from '../images/explore.svg'
import CaseStudy from '../images/projects.svg'
import "../components/aboutMe.css";
import useIntersectionObserver from '../hooks/useIsVisible';

function CaseStudies () {
  const { isVisible, domRef } = useIntersectionObserver();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
          {
            breakpoint: 780, // Screen width of 780px or less
            settings: {
              slidesToShow: 1, // Show only 1 slide
            }
          }
        ]
      };
    
      const slides = [
        { id: 1, src: Explore },
        { id: 2, src: Coached },
        { id: 3, src: CaseStudy },
      ];
    
      return (
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
        <div class='projects_slider' style={{height: '100%', paddingBottom: 100}}>
          <div className="projects_headline"> <h1> CASE STUDIES </h1> </div>
          <Slider style={{width: '90%', margin: 'auto'}} {...settings}>
            {slides.map(slide => (
              <div key={slide.id} style={{ height: 500, width: 500}}>
                <img style={{height: '100%', width: '100%', padding: 5}} src={slide.src} alt-text='case-study image' />
              </div>
            ))}
          </Slider>
        </div>
        </div>
      );
}

export default CaseStudies