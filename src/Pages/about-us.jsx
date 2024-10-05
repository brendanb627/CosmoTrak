import React from 'react'
import { PageLayout } from '../Components/sidebar'

export const AboutUs = () => {
  return (
    <div className='about-page'>
        <PageLayout/>
        <img src={"CosmoTrak-IconLogo.png"} height="80vw" />
        <h1>About Us</h1>
        <div className='about-rect'>
        Welcome to Cosmotrak, a innovative technology team founded by two high school students with a passion for space exploration and cutting-edge software development. With a strong background in React.js and AWS services, we're dedicated to pushing the boundaries of what's possible in the space tech industry. As participants in the NASA Global Hackathon, we're excited to bring our skills and creativity to the table to tackle some of the most pressing challenges facing space exploration today. Despite our young age, we're driven by a fierce determination to make a meaningful impact and leave our mark on the cosmos. At Cosmotrak, we're not just building software - we're building a brighter future for humanity among the stars.
        </div>
    </div>
  )
}
