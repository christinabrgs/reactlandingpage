import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Coached from '../images/coached.svg'
import Explore from '../images/explore.svg'
import "../components/aboutMe.css";
import useIntersectionObserver from '../hooks/useIsVisible';

function CaseStudies () {
  const { isVisible, domRef } = useIntersectionObserver();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Number of slides to show
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
        { id: 1, src: Explore, href: '/explore' },
        { id: 2, src: Coached, href: '/coach' },
        // { id: 3, src: CaseStudy },
      ];
    
      return (
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
        <div className='projects_slider' style={{height: '100%', paddingBottom: 100}}>
          <div className="projects_headline"> <h1> CASE STUDIES </h1> </div>
          <Slider style={{width: '70%', margin: 'auto'}} {...settings}>
            {slides.map(slide => (
              <div key={slide.id} style={{ height: '100%', width: '100%'}}>
                         <a
                href={slide.href}
                rel="noreferrer"
              >
                <img style={{height: '100%', width: '100%', padding: 2}} src={slide.src} alt='case-study' />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        </div>
      );
}

export default CaseStudies