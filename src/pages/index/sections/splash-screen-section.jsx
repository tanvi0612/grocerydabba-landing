import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

import { Button } from "../../../components/sharedComponents"

// images
import splashBackgroundImage from "../../../assets/images/splash-screen-image.svg"
import { showChatBox } from "../../../components/helpers"

const SplashBackground = styled.div`
    /* background: url(${splashBackgroundImage}) no-repeat ; */
    /* background-color: #00000073; */
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: overlay;
    overflow: hidden;
`

const SplashContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: center;
  /* grid-gap: 1rem;
    grid-template: 1fr 1fr; */
  /* color: white; */
  min-height: calc(100vh - 12.5rem);

  h1 {
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    min-height: 100vh;
  }
`

const ButtonWrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 12rem 7rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

const CounterGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: min-content min-content min-content;
  padding: 1.5rem 0;
  justify-content: space-between;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

const CounterCell = styled.div`
  text-align: center;

  small {
    margin-left: -0.5rem;
  }
`

const CounterText = styled.h5`
  width: max-content;

  @media (max-width: 550px) {
    width: 100%;
  }
`

const CounterNumber = styled.div`
  color: ${({ theme }) => theme.accentPrimary};
  font-size: 3rem;
  font-weight: bold;
`

const SplashGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 443px;
  align-items: center;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`

const CounterBar = styled.div`
  background: #33a1fd2e;
`

const SplashCounter = () => (
  <CounterBar>
    <div className="container">
      <CounterGrid>
        <ScrollAnimation animateIn="fadeInDown" delay={500} offset={800}>
          <CounterCell>
            <CounterNumber>21</CounterNumber>
            <CounterText>Average Number of offers</CounterText>
          </CounterCell>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay={600} offset={800}>
          <CounterCell>
            <CounterNumber>
              7 <small>d</small>
            </CounterNumber>
            <CounterText>Average Time to get jobs</CounterText>
          </CounterCell>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInDown" delay={700} offset={800}>
          <CounterCell>
            <CounterNumber>
              5 <small>x</small>
            </CounterNumber>
            <CounterText>Salary Increase</CounterText>
          </CounterCell>
        </ScrollAnimation>
      </CounterGrid>
    </div>
  </CounterBar>
)

const SplashScreenSection = props => {
  return (
    <SplashBackground>
      <div className="container">
        <SplashGrid>
          <SplashContent>
            <ScrollAnimation animateIn="fadeIn">
              <h1>
                Delivering all your Indian grocery needs to your doorstep.
              </h1>
            </ScrollAnimation>
            <ul>
              <ScrollAnimation animateIn="fadeIn" delay={300}>
                <li>
                  Shop at your convenience and let us take care of the rest
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={600}>
                <li>
                  We bring you the best quality ingredients for that perfect
                  Indian meal. Yum!
                </li>
              </ScrollAnimation>
            </ul>
            <ScrollAnimation animateIn="fadeIn" delay={1000}>
              <ButtonWrap>
                <Button fit primary onClick={showChatBox}>
                  Place your Order!
                </Button>
                <Button
                  fit
                  primary
                  onClick={() =>
                    document.querySelector(".how-it-works").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  How it works
                </Button>
              </ButtonWrap>
            </ScrollAnimation>
          </SplashContent>

          <ScrollAnimation animateIn="fadeIn" delay={400}>
            <img src={splashBackgroundImage} alt="" />
          </ScrollAnimation>
        </SplashGrid>
      </div>
      <ScrollAnimation animateIn="fadeInUp" delay={400} offset={800}>
        {/* <SplashCounter /> */}
      </ScrollAnimation>
    </SplashBackground>
  )
}

export default SplashScreenSection
