import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './owlcarousel.css';

function TestimonialsCarousel() {
    return (
        <div className="testimonials-container">
            <h2 className="testimonials-title">Ratings</h2>
            <Carousel 
                showArrows={true}
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                showStatus={false} 
                interval={5000}
                className="testimonials-carousel"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
                            <span className="arrow">&lt;</span>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
                            <span className="arrow">&gt;</span>
                        </button>
                    )
                }
            >
                <div className="testimonial-item">
                    <img className="quote-light-avatar" src="https://livedemo00.template-help.com/wt_51680/images/testimonials-2-68x68.jpg" alt="Paul Johnston" />
                    <h5 className="quote-light-cite">Paul Johnston</h5>
                    <p className="quote-light-position">Regular Client</p>
                    <p className="quote-light-text">
                        The service was excellent, thank you. My driver was waiting at Arrivals for me with a clear sign. He introduced himself, was very polite and friendly and drove me to my hotel with no delay. I will be pleased to recommend this service to my family and friends.
                    </p>
                </div>
                <div className="testimonial-item">
                    <img className="quote-light-avatar" src="https://livedemo00.template-help.com/wt_51680/images/testimonials-1-68x68.jpg" alt="Patrick Mills" />
                    <h5 className="quote-light-cite">Patrick Mills</h5>
                    <p className="quote-light-position">Regular Client</p>
                    <p className="quote-light-text">
                        Everything went perfectly! Incredibly punctual, friendly drivers, and a very fast customer service that answered my questions within minutes the night before my return trip. I highly recommend booking here, and will definitely do so again in the future.
                    </p>
                </div>
                <div className="testimonial-item">
                    <img className="quote-light-avatar" src="https://livedemo00.template-help.com/wt_51680/images/testimonials-4-68x68.jpg" alt="Brittany Grant" />
                    <h5 className="quote-light-cite">Brittany Grant</h5>
                    <p className="quote-light-position">Regular Client</p>
                    <p className="quote-light-text">
                        I found your service to be a 5-star experience. Our flight was delayed by two hours, so we arrived at the airport at 2am. However, the driver was waiting at the arrivals hall for us, when we finally got there. All the people we communicated with were pleasant and cheerful.
                    </p>
                </div>
            </Carousel>
        </div>
    );
}


export default TestimonialsCarousel;
