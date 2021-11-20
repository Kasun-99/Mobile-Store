import React from 'react';
import AnimationSection from '../mainpages/homepage/AnimationSection';
import Banner from './homepage/Banner'
import Brand from '../mainpages/homepage/Brand';
import Hero from '../mainpages/homepage/Hero'
import Slider from '../mainpages/homepage/hero/Slider'
import BestSeller from '../mainpages/homepage/BestSeller'
import IPhoneCategory from './homepage/HomeCategories/IPhoneCategory';
import SamsungCategory from './homepage/HomeCategories/SamsungCategory';
import SonyCategory from './homepage/HomeCategories/SonyCategory';
import XiaomiCategory from './homepage/HomeCategories/XiaomiCategory';
import AppleAccessoriesCategory from './homepage/HomeCategories/AppleAccessoriesCategory';
import AndroidAccessoriesCategory from './homepage/HomeCategories/AndroidAccessoriesCategory';
import Footer from '../mainpages/homepage/Footer';


function Home() {
    return (
        <>
          
          <AnimationSection/>
          <Banner/>
          <BestSeller/>
          <Slider/>
          <IPhoneCategory/>
          <SamsungCategory/>
          <SonyCategory/>
          <XiaomiCategory/>
          <AppleAccessoriesCategory/>
          {/* <AndroidAccessoriesCategory/> */}
          <Hero/>
          
          <Brand/>
          <Footer/>
        </>
    )
}

export default Home
