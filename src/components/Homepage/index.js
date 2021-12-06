import React, { useState } from 'react';
import styled from 'styled-components';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import SubmissionFormStep from '../SubmissionFormStep'
import CheckProgressStep from '../CheckProgressStep'

const SpacedRow = styled(Row)`
  margin-top: 200px;
`

const ExtendedDiv = styled.div`
  height:600px;
  overflow-y:auto;
  overflow-x:hidden;
`

const Homepage = () =>{
  const [step, setStep] = useState(0);
  const [jobId, setJobId] = useState(null)

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  return(
    <div>
      <SpacedRow justifyContent="center">
        <Col sm={5}>
          <Stepper activeIndex={step}>
            <Stepper.Step key="step-1">
              <Stepper.Label>
                Share Spreadsheet with Email
              </Stepper.Label>
              <Stepper.Content>
                Share your the Google Spreadsheet with the Email.
                <div> 
                  <Button onClick={onNext}>Next</Button>
                </div> 
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
                />
              </Stepper.Content>
            </Stepper.Step>
            <Stepper.Step key="step-3">
              <Stepper.Label>
                Check Progress
              </Stepper.Label>
              <Stepper.Content>
                <ExtendedDiv>
                  <CheckProgressStep jobId={jobId}/>
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
