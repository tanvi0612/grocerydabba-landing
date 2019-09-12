import React, { useState } from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"

import { Button, Page } from "../components/sharedComponents"

import sendToAirtable from "../utils/sendToAirtable"

const FormItem = styled.div`
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  input[type='text'], textarea
    /* input:not(.inline) */
 {
    width: 100%;
  }
`

const Form = styled.form`
  width: 600px;
  max-width: 100%;
`

const InputWithOther = styled.label`
  .other-input {
    display: none;
    width: "200";
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  input:checked + .other-input {
    display: block;
  }
`

const Asterisk = styled.sup`
  content: "*";
  color: red;
`

const ApplyPage = props => {
  const [formStatus, setFormStatus] = useState(false)

  const submitForm = async e => {
    e.preventDefault()

    if (!!formStatus) {
      return
    }

    setFormStatus("loading")
    try {
      let inputName = new Set(
        Array.prototype.slice
          .call(document.querySelectorAll("input[name], textarea[name]"))
          .map(a => a.name)
      )
      inputName = Array.from(inputName)

      const formValue = inputName.reduce((total, currKey) => {
        let inputDOM = document.querySelector(`[name=${currKey}]`)

        if (!inputDOM) {
          return total
        }

        if (inputDOM.type === "radio") {
          inputDOM = document.querySelector(`[name=${currKey}]:checked`)
        }

        total[currKey] = total[currKey] || inputDOM.value

        return total

        /*
          "Name": "test",
          "Email": "test@test.com",
          "Experience": "Just Graduated",
          "IdealStartup": "test",
          "ImportantThing": "test",
          "PersonalDescription": " Machine learning Engineer",
          "Phone": "(910) 890-8806",
          "Source": "test",
          "WhyHighGrowth?": "asdafs",
          "ProfileLink": "github.com/utkarshbhimte",
        */
      }, {})

      console.log("TCL: formValue", formValue)
      const response = await sendToAirtable(formValue)
      console.log("TCL: response", response)
      setFormStatus("success")
    } catch (e) {
      setFormStatus(false)
    }
  }

  return (
    <Layout>
      <SEO title="Apply | SkipTheLine" />

      <Page>
        <div className="container">
          <h1>Apply for SkipTheLine</h1>
          <p>
            SkipTheLine developers get hired because we don't ask for your
            education background or pedigree(neither does the company) but only
            about your work. Tell us in detail what you have done and built till
            now to have the best shot at getting shortlisted.
          </p>
          <Form onSubmit={submitForm}>
            {formStatus !== "success" && (
              <React.Fragment>
                <FormItem>
                  <label>
                    Name <Asterisk>*</Asterisk>{" "}
                  </label>
                  <input name="Name" required type="text" placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Email <Asterisk>*</Asterisk>{" "}
                  </label>
                  <input name="Email" required type="text" placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Mobile <Asterisk>*</Asterisk>{" "}
                  </label>
                  <input name="Phone" required type="text" placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    How did you hear/come to know about SkipTheLine?{" "}
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <input name="Source" required type="text" placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Please paste a link of your LinkedIn, Github profiles. You
                    can include Facebook as well to help me give a better
                    understanding of you as a person. Please separate them using
                    commas.
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <input
                    name="ProfileLink"
                    required
                    type="text"
                    placeholder=""
                  />
                </FormItem>

                <FormItem>
                  <label>
                    Which of the following best describes you?{" "}
                    <Asterisk>*</Asterisk>
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="Frontend Developer"
                    />{" "}
                    Frontend Developer <br />
                  </label>
                  <label>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="Backend Developer"
                    />{" "}
                    Backend Developer <br />
                  </label>
                  <label>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="Fullstack Developer"
                    />{" "}
                    Fullstack Developer <br />
                  </label>
                  <label>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="Machine learning Engineer"
                    />{" "}
                    Machine learning Engineer <br />
                  </label>
                  <label>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="AI Engineer"
                    />{" "}
                    AI Engineer <br />
                  </label>
                  <InputWithOther>
                    <input
                      required
                      type="radio"
                      name="PersonalDescription"
                      value="Other"
                    />{" "}
                    Others
                    <input
                      type="text"
                      name="PersonalDescription"
                      className="other-input"
                      placeholder="Please Specify"
                    />
                  </InputWithOther>
                </FormItem>

                <FormItem>
                  <label>
                    What experience bracket are you in? <Asterisk>*</Asterisk>{" "}
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="Experience"
                      value="Just Graduated"
                    />{" "}
                    Just Graduated <br />
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="Experience"
                      value="1-2 Years"
                    />{" "}
                    1-2 Years <br />
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="Experience"
                      value="2-4 Years"
                    />{" "}
                    2-4 Years <br />
                  </label>

                  <label>
                    <input
                      required
                      type="radio"
                      name="Experience"
                      value="More Than 5 years"
                    />{" "}
                    More Than 5 years
                  </label>
                </FormItem>

                <FormItem>
                  <label>
                    What is the most impressive thing you have built in your
                    life till now?
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <textarea name="ImportantThing" required placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Describe the ideal startup that you want to work with.
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <textarea name="IdealStartup" required placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Why do you want to join a high growth startup?{" "}
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <textarea name="WhyHighGrowth" required placeholder="" />
                </FormItem>
                <FormItem>
                  <label>
                    Anything else you would like me to know about you?{" "}
                    <Asterisk>*</Asterisk>{" "}
                  </label>
                  <textarea name="OtherInfo" required placeholder="" />
                </FormItem>
              </React.Fragment>
            )}

            {!formStatus && (
              <Button primary htmlType="submit">
                Submit
              </Button>
            )}
            {formStatus === "loading" && <Button>Submitting...</Button>}
            {formStatus === "success" && (
              <p>
                Thank you for applying. We will reach out to you soon.{" "}
                <span role="img" aria-label="clap">
                  👏
                </span>
              </p>
            )}
          </Form>
        </div>
      </Page>
    </Layout>
  )
}

export default ApplyPage
