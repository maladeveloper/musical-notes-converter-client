import React, { HTMLAttributes,useState, useCallback } from 'react';
import {
  Notification,
  Title,
  Close,
  ToastProvider,
  useToast
} from '@zendeskgarden/react-notifications';
import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Dots } from '@zendeskgarden/react-loaders';
import Form from '../Form'
import ErrorModal from '../ErrorModal'
import SuccessNotification from '../SuccessNotification'
import { postSpreadsheetData } from '../../utils/api'
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const SpacedRow = styled(Row)`
  margin: 50px 0px;
`

const SubmissionFormStep = ({ onNext, onBack }) =>{
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false)

  const sendFormInfo = (data) => {
    setLoading(true)
    postSpreadsheetData(data).then( resp => {
      const [statusCode, retData] = resp
      const { jobId, numInstruments, message } = retData
      if(statusCode === 200){
        console.log('the success message', message)
        setSuccessMessage(message)
        setLoading(false)
      }else{
        setErrorMessage(message)
        setLoading(false)
      }
    })
  }

  return(
    <div>
    { isLoading &&
      <>
        <SpacedRow justifyContent="center">
          <Col textAlign="center">
            <Dots size={48} />
          </Col>
        </SpacedRow>
      </>
    }
    { !successMessage && !isLoading &&
      <>
        <SpacedRow justifyContent="start">
          <Col sm={4}>
           <Button onClick={onBack}>Back</Button>
          </Col>
        </SpacedRow>
        <Form sendFormInfo={sendFormInfo}/>
      </>
    }
    { errorMessage && <ErrorModal message={errorMessage} setVisible={setErrorMessage}/>}
    { successMessage &&
        <>
        <SpacedRow justifyContent="start">
          <Col sm={10}>
            <SuccessNotification message={successMessage} setVisible={setSuccessMessage}/>
          </Col>
        </SpacedRow>
        <SpacedRow justifyContent="start">
          <Col sm={4}>
            <Button onClick={onNext}>Next</Button>
          </Col>
        </SpacedRow>
        </>
    }

    </div>
  )
}

export default SubmissionFormStep;
