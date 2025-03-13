import React ,{useState}from 'react';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn }from './HeroElements';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
 const Hero = () => {
     const[isOpen, setIsOpen]=useState(false);
     const toggle=()=>{
     setIsOpen(!isOpen);

     };
    return (
        <HeroContainer>

<Navbar toggle={toggle}/>
<Sidebar isOpen={isOpen} toggle={toggle}/>
<HeroContent>
    <HeroItems>
        <HeroH1>Greatest ShoeCollection Ever</HeroH1>
        <HeroP>Working 24/7</HeroP>
        <HeroBtn>Place Your Order</HeroBtn>
    </HeroItems>
</HeroContent>
        </HeroContainer>
    );
};
export default Hero