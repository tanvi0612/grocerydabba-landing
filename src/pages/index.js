import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// sections
import HowItWorksSection from "./index/sections/how-it-works-section"
import SplashScreenSection from "./index/sections/splash-screen-section"
// import TestimonialSection from './index/sections/testimonial-section';
import WhySkipTheLineSection from "./index/sections/why-section"
// import CompanySection from "./index/sections/company-section"

const IndexPage = () => (
  <Layout>
    <SEO title="SkipTheLine" />

    <SplashScreenSection />

    <HowItWorksSection />

    <WhySkipTheLineSection />
  </Layout>
)

export default IndexPage
