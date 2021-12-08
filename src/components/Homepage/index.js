import React, { useState } from 'react';
import styled from 'styled-components';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import SubmissionFormStep from '../SubmissionFormStep'
import CheckProgressStep from '../CheckProgressStep'
import { XXXL } from '@zendeskgarden/react-typography'

const Title = styled(XXXL)`
  color: #3d4a54;
`

const TitleRow = styled(Row)`
  margin-top: 20px;
  margin-left:10px;
`


const SpacedRow = styled(Row)`
  margin-top: 100px;
`

const SmallSpacedRow = styled(Row)`
  margin-top: 20px;
  margin-left:10px;
`

const ExtendedDiv = styled.div`
  height:600px;
  overflow-y:auto;
  overflow-x:hidden;
`

const Homepage = () =>{
  const [step, setStep] = useState(0);
  const [jobId, setJobId] = useState(null)

  const restart = () =>{
    setStep(0)
    setJobId(null)
  }

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  return(
    <div>
      <TitleRow justifyContent="center">
        <Title isBold={true}>Convert Music Notes</Title>
      </TitleRow>
      <SpacedRow justifyContent="center">
        <Col sm={5}>
          <Stepper activeIndex={step}>
            <Stepper.Step key="step-1">
              <Stepper.Label>
                Share Spreadsheet with Email
              </Stepper.Label>
              <Stepper.Content>
                <p>
                Share your the Google Spreadsheet with this email <b>music-notes-converter@my-project-1577070881918.iam.gserviceaccount.com</b>
                </p>
                <p>
                 Please be sure to give <b>Editor Access</b> to this email above.
                </p>
                <SmallSpacedRow> 
                  <Button onClick={onNext}>Next</Button>
                </SmallSpacedRow> 
              </Stepper.Content>
            </Stepper.Step>
            <Stepper.Step key="step-2">
              <Stepper.Label>
                Enter Spreadsheet Information
              </Stepper.Label>
              <Stepper.Content>
                <SubmissionFormStep
                  setJobId={setJobId}
                  onNext={onNext}
                  onBack={onBack}
                  jobId={jobId}
                />
              </Stepper.Content>
            </Stepper.Step>
            <Stepper.Step key="step-3">
              <Stepper.Label>
                Check Progress
              </Stepper.Label>
              <Stepper.Content>
                <ExtendedDiv>
                  <CheckProgressStep jobId={jobId} restart={restart}/>
                </ExtendedDiv>
              </Stepper.Content>
            </Stepper.Step>
          </Stepper >
        </Col>
      </SpacedRow>
    </div>
  )
}

export default Homepage;
