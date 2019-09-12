import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

import { SectionHeading } from "../../../components/sharedComponents"

const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`

const LogoImage = styled.img`
  height: 80px;
  max-width: 100px;
  object-fit: contain;
  object-position: center;
  filter: grayscale(1);
  transition: all 0.3s ease-in-out;
  margin: 0.5rem;

  &:hover,
  &:focus {
    filter: grayscale(0);
  }
`

const CompanySection = props => (
  <section>
    <div className="container">
      <ScrollAnimation animateIn="fadeIn">
        <SectionHeading>
          Some companies that have hired through SkipTheLine
        </SectionHeading>
      </ScrollAnimation>
      <LogoGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((a, idx) => (
          <ScrollAnimation key={a} animateIn="fadeIn" delay={idx * 100}>
            <LogoImage
              src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
              alt=""
            />
          </ScrollAnimation>
        ))}
      </LogoGrid>
    </div>
  </section>
)

export default CompanySection
