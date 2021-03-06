import React from 'react'
import Image from 'next/dist/client/image'
import styled from 'styled-components'
import main from '../../public/assets/main.png'

import { color, FontSize } from '../../styles/Staticstyle'
import { useState, useEffect } from 'react'

const ImageContainer = styled.div`
  width: 100vw;
  .mainholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .search {
      input {
        border-width: 0px;
        font-size: 1.2rem;
        background-color: rgba(242,242,242);
        line-height:1.5;
        outline: none;
        width: 30rem;
        height: 3rem;
        border-radius: 8px 0px 0px 8px;
        padding: 1rem 2rem;
        text-align:start;
        ::placeholder{
        }
      }
        
      }
      button {
        font-size: 1rem;
        width: 6rem;
        height: 3rem;
        background-color: ${color.MainColor};
        border: none;
        border-radius: 0 8px 8px 0;
      }
    }

  .MainText {
    font-size: ${FontSize.MainFont};
    font-weight: bold;
  }
`

const Imagetag = styled(Image)`
  opacity: 0.6;
`;

const Hero = () => {

  return (
    <ImageContainer>
      <Imagetag src={main} layout="responsive" />
      <div className="mainholder">
        <h1 className="MainText">Which Location are you looking for?</h1>
        <form className="search" action="submit">
          <input type="text" placeholder="Search by Street, City" />
          <button type="submit">Search</button>
        </form>
      </div>
    </ImageContainer>
  );
}

export default Hero
