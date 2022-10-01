import React from 'react'

const Homepage = () => {
  return (
    <div>
    <div class="testimonial-section bg-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-4 mb-5 section-title" data-aos="fade-up" data-aos-delay="0">
            
            <h2 class="mb-4 font-weight-bold heading">Testimonials</h2>
            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            <p><a href="#" class="btn btn-primary">Product Tour</a></p>
          </div>
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            
            <div class="testimonial--wrap">
              <div class="owl-single owl-carousel no-dots no-nav">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center mb-4">
                    <div class="photo mr-3">
                      <img src="images/person_4-min.jpg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="author">
                      <cite class="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  

                <div class="testimonial-item">
                  <div class="d-flex align-items-center mb-4">
                    <div class="photo mr-3">
                      <img src="images/person_1-min.jpg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="author">
                      <cite class="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  

                <div class="testimonial-item">
                  <div class="d-flex align-items-center mb-4">
                    <div class="photo mr-3">
                      <img src="images/person_2-min.jpg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="author">
                      <cite class="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  
              </div>
              <div class="custom-nav-wrap">
                <a href="#" class="custom-owl-prev"><span class="icon-keyboard_backspace"></span></a>
                <a href="#" class="custom-owl-next"><span class="icon-keyboard_backspace"></span></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage