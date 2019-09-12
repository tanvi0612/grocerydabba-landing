import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Page } from "../components/sharedComponents"

const FaqList = styled.ul`
  list-style: none;
  margin: 0;

  h3 {
    margin-bottom: 0.5rem;
  }

  li {
    margin-bottom: 2rem;
  }
`

const FaqPage = () => (
  <Layout>
    <SEO title="FAQ | SkipTheLine" />

    <Page>
      <div className="container">
        <h1>FAQs</h1>

        <FaqList>
          <li>
            <div>
              <h3>Who can apply for SkipTheLine?</h3>
              <p>
                It doesn’t matter if you are a student or an already established
                software developer. If you have built things and want the best
                possible software developer job in India, you should apply
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>How does the process work?</h3>
              <p>
                Based on your completed application, we reach out and schedule a
                phone call to understand more about your background, the kind of
                projects you have done and your aspirations to work in a high
                growth startup. If everything looks good, you are featured on
                the latest upcoming newsletter(One goes out every weekend) Once
                featured, you will be connected directly with startups who want
                to speak to you on email. The closure happens between you and
                the company
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Do you charge for it?</h3>
              <p>
                It is absolutely FREE for developers. Our only goal at
                SkipTheLine is to help top developers have the best jobs in high
                growth companies
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                After completing the application, when should I expect a call?
              </h3>
              <p>
                You will receive an email with a link to pick a time for the
                call. Our team will call you at the scheduled time. It is not an
                interview but a conversation to understand you and your work
                better
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>How much time does it take to get hired?</h3>
              <p>
                We have seen that on an average a person receives at least 2
                offers within 10 days which can go to a high of 6-7 offers in
                the same time. SkipTheLine is the fastest and a direct way for
                talented developers to get hired without applying. Your joining
                depends on{" "}
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>How many people have gotten hired till now?</h3>
              <p>
                Within the first two months of starting SkipTheLine, 15
                developers got hired at an average of 10 days from being
                featured in the newsletter. Many more have gotten hired post
                that
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>What are some companies which are part of SkipTheLine?</h3>
              <p>
                We have been in the Indian Startup ecosystem helping build and
                nurture it for over 6 years now. In the process, we have built a
                direct network with the founders of almost every high growth
                startup, which means that apart from the 60 partners we have
                right now(including smallcase, exotel, one of the largest
                fintech companies of Japan who has set foot in India and more),
                it is only a matter of time when the number of partner companies
                will cross 200(with the likes of PayTm, Oyo, Flipkart etc)
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                Can I speak to someone who has gotten hired through SkipTheLine?
              </h3>
              <p>
                Absolutely. Post our call if you want to speak to a developer
                who has gotten hired, we will more than happy to arrange the
                call. You can also speak to a hiring partner who has hired
                people through SkipTheLine
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                What salary can I expect if I get hired through SkipTheLine?
              </h3>
              <p>
                It is completely dependent on your profile and the kind of
                projects you have built. We have enabled a fresher to get hired
                for 18L and experienced developer(4 years) get hired for 25L+
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>
                Do you help in Salary negotiation? I have more questions, whom
                should I connect with?
              </h3>
              <p>
                SkipTheLine gets out of the picture once you have been connected
                with the startups who are interested in speaking to you. When
                you receive multiple offers and not sure which one to go for, we
                are more than happy to help you make an informed decision as we
                have done for everyone who has gotten hired till now If you have
                more questions, please drop us an email at:
                niti@skiptheline.tech
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Can I see how a newsletter looks like?</h3>
              <p>
                For sure, this is how it looked like when we first started:{" "}
                <a href="https://www.getrevue.co/profile/skiptheline/issues/skiptheline-issue-3-hire-hand-curated-developers-134851?utm_campaign=Issue&amp;utm_content=view_in_browser&amp;utm_medium=email&amp;utm_source=SkipTheLine">
                  SkipTheLine newsletter
                </a>
                ,
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Will my present company know that I am looking out?</h3>
              <p>
                No, it is a private newsletter and no one can see it. Also when
                your name goes out there is no other information that helps a
                company identify who you are. We will exclude the company you
                are presently in from the newsletter(featuring you) to ensure it
                even further
              </p>
            </div>
          </li>
        </FaqList>
      </div>
    </Page>
  </Layout>
)

export default FaqPage
