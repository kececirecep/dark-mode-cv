import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillMail } from "react-icons/ai";



const About = () => {
  return (
    <div className='p-8 pt-12 max-w-5xl mx-auto'>
        <h2 className='pt-8 font-semibold text-5xl'>RECEP KEÇECİ</h2>
        <p class="pt-3 text-2xl font-bold animate-gradient">Jr. Front End Developer</p>
        <div className='flex items-center text-3xl pt-6 gap-4'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
        </div>
        <div className='mt-12 p-4 rounded-lg font-semibold border border-cyan-400'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, animi laboriosam, velit cum delectus, sunt ratione natus consequatur pariatur amet nulla. Minima perferendis quisquam unde nobis saepe fuga voluptas explicabo eius, tenetur quidem inventore sed corporis nisi harum sint et assumenda aliquid ex minus ullam distinctio sequi. Inventore natus suscipit earum doloribus, repudiandae quam porro explicabo ipsa. Voluptatum doloribus iusto commodi porro veritatis saepe, numquam nam nostrum soluta nobis at quod consequuntur unde quae vel illum. Ipsam quidem iusto voluptatibus voluptatum dolor quos exercitationem doloremque molestias? Recusandae modi eaque quod nam consequuntur aliquid tempora, ipsum, corrupti consectetur voluptas, culpa temporibus?
            </p>
        </div>
    </div>
  )
}

export default About