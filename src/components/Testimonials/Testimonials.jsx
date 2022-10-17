import React from 'react';
import './Testimonials.css'
import AVTR from '../../Assets/AVTR.jpeg'

// import Swiper core and required modules
import { Pagination,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonialdata=[
    {
        avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHPjXdO9ZvTmQ/profile-displayphoto-shrink_200_200/0/1628074135811?e=2147483647&v=beta&t=M-7LClL3mnXDgx5MlCMEICm429-6WQ6kIQQeeAguT2U",
        name:"Anand",
        review:"An excellent developer and mentor.One of the few people who helped me to push the boundries of my knowledge and skill"
},
{
    avatar: AVTR,
    name:"Hari Nair",
    review:"Vineeth never said no to any projects that I forwarded him.He asks for some time and get it done.All my clients were satisfied with his work"
},
{
    avatar: "https://media-exp1.licdn.com/dms/image/C5603AQGjR_7lSSlvpg/profile-displayphoto-shrink_800_800/0/1638070257980?e=2147483647&v=beta&t=rsARoFkVos49Lx4RnzVTdLqB_V2NxkQuptWdZSCKkkA",
    name:"Gopakumar",
    review:"A hardworking developer.Always on the need to know more about the latest technologies"
},

]
function Testimonials() {
    return ( 
        <section id='testimonials'>
            <h5>Review from Clients</h5>

            <Swiper className='container testimonials_container'
            // install Swiper modules
      modules={[Pagination,Navigation]}
      spaceBetween={65}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      
            >

            {Testimonialdata.map(({avatar,name,review},index)=>{
                return(
                    <SwiperSlide key={index} className='testimonial'>
                     <div className='client_avatar'>
                        <img src={avatar} alt=''/>
                        
                     </div>
                     <h5 className='client_name'>{name}</h5>
                        <small className='client_review'>
                        {review}
                        </small>
                </SwiperSlide>
                )
            })}

            </Swiper>
        </section>
     );
}

export default Testimonials; 