import React from 'react'
import './About.css'
import Navbar from '../NavBar'

const About = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div class="team-title">
            <h1><span>Meet</span> OUR TEAM</h1>
        </div>
        
        <div class="team-Section">


        <div class=" swiper mySwiper Container1">

            <div class="swiper-wrapper Content">

                <div class=" swiper-slide Card">
                    <div class="Card-content">
                        <div class="Image">
                            <img src="./images/VISHAL.jpeg" alt=""/>
                            
                        </div>


                        <div class="icons">
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>


                        <div class="name-profession">
                            <span class="name">Vishal Upadhyaya</span>
                            <class class="profession">Web Developer</class>                          
                            <class class="profession">Software Engineer</class>                          

                        </div>


                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            
                            
                        </div>


                        <div class="button">
                            <button class="aboutMe">About me</button>
                        </div>
                    </div>
                </div>

                <div class=" swiper-slide Card">
                    <div class="Card-content">
                        <div class="Image">
                            <img src="" alt=""/>
                            
                        </div>


                        <div class="icons">
                            <i class="fab  fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>


                        <div class="name-profession">
                            <span class="name">Shivanshu Agarwal</span>
                            <class class="profession">Web Developer</class>
                            <class class="profession">Software Engineer</class>
                        </div>


                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            
                        </div>


                        <div class="button">
                            <button class="aboutMe">About me</button>
                        </div>
                    </div>
                </div><div class=" swiper-slide Card">
                    <div class="Card-content">
                        <div class="Image">
                            <img src="" alt=""/>
                            
                        </div>


                        <div class="icons">
                            <i class="fab  fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>


                        <div class="name-profession">
                            <span class="name">Pooja Yadav</span>
                            <class class="profession">Web Developer</class>
                            <class class="profession">Software Engineer</class>
                        </div>


                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            
                        </div>


                        <div class="button">
                            <button class="aboutMe">About me</button>
                        </div>
                    </div>
                </div>
                <div class=" swiper-slide Card">
                    <div class="Card-content">
                        <div class="Image">
                            <img src="WhatsApp Image 2023-04-18 at 10.42.45 AM.jpeg" alt=""/>
                        </div>
                        <div class="icons">
                            <i class="fab  fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="name-profession">
                            <span class="name">Sakshi</span>
                            <class class="profession">Web Developer</class>
                            <class class="profession">Software Engineer</class>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="button">
                            <button class="aboutMe">About me</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </section>
    
    </>
  )
}

export default About
