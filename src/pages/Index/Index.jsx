import React from 'react'
import Header from '../../Components/Header/Header'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Brands from '../../Components/Brands/Brands'
import Category from '../../Components/Category/Category'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import OurTeachers from '../../Components/OurTeachers/OurTeachers'
import Discount from '../../Components/Discount/Discount'
import Comments from '../../Components/Comments/Comments'
import Blog from '../../Components/Blog/Blog'
import FooterSection from '../../Components/FooterSection/FooterSection'

export default function Index() {
  return (
    <>
      <Header/>
      <Landing/>
      <About/>
      <Brands/>
      <Category/>
      <PopularCourses/>
      <OurTeachers/>
      <Discount/>
      <Comments/>
      <Blog/>
      <FooterSection/>
    </>
  )
}
