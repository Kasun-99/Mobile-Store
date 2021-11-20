import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";



 const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};


const sliderItems = [
  {
    id: 1,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899234/Ecommerce/Summury/s-1_u1ht3v.jpg",
    title: "Happy Customer !",
    desc: "IPhone 7 metle back  Thanks for trusting us.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899232/Ecommerce/Summury/s-9_eis0y8.jpg",
    title: "Happy Customer !",
    desc: "IPhone 7 Plus metle back..Thanks for trusting us.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899232/Ecommerce/Summury/s-8_b9nzst.jpg",
    title: "Happy Customer !",
    desc: "IPhone 6S..Thanks for trusting us.",
    bg: "fbf0f4",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899232/Ecommerce/Summury/s-7_q32wk2.jpg",
    title: "Happy Customer !",
    desc: "IPhone 6SE   Thanks for trusting us.",
    bg: "fbf0f4",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899231/Ecommerce/Summury/s-5_lpaol8.jpg",
    title: "Happy Customer !",
    desc: "IPhone 7 Plus Thanks for trusting us.",
    bg: "fbf0f4",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/flashmobile-shop/image/upload/v1632899230/Ecommerce/Summury/s-2_awtgsc.jpg",
    title: "Happy Customer !",
    desc: "IPhone 7 Red Thanks for trusting us",
    bg: "fbf0f4",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
 
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  
`;

const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5);
    } else {
      setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;