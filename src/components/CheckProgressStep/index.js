import React, { useState, useEffect } from 'react';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Span } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Dots } from '@zendeskgarden/react-loaders';
import styled from 'styled-components';
import { ReactComponent as TickIcon } from '@zendeskgarden/svg-icons/src/12/check-lg-stroke.svg';
import { ReactComponent as FileIcon } from '@zendeskgarden/svg-icons/src/12/file-document-stroke.svg';
import { findJobStatus } from '../../utils/api'
import SuccessNotification from '../SuccessNotification'

//const testInstruments = ['adsaf', 'asdasfasfg', 'asfqwasd', 'qwdasdasd', 'gdfasdfafsd', 'grswDASASD', 'asdagdfr']
const SpacedRow = styled(Row)`
  margin: 50px 0px;
`
export const StyledSpan = styled(Span).attrs({ isBold: true })`
  display: block;
`;

const instrumentsToTimeline = (instruments) => {
  let key = 0
  return instruments.map( instrument =>{
    key ++
    return (
      <Timeline.Item key={key} icon={<FileIcon/>}>
        <Timeline.Content>
          <StyledSpan>
            {instrument}
          </StyledSpan>
        </Timeline.Content>
      </Timeline.Item>
    )
  })
}
const CheckProgressStep = ({ jobId }) => {
  //const [doneInstruments, setDoneInstruments] = useState(testInstruments)
  const [doneInstruments, setDoneInstruments] = useState([])
  const [loadingApi, setLoadingApi] = useState(true)
  const [allDone, setAllDone] = useState(null)
  const numJobId = parseInt(jobId)

  useEffect(() => {
    if (jobId){
      setLoadingApi(true)
      const handle = setInterval( () =>{
        findJobStatus(numJobId).then(resp => {
          const [ statusCode, retData ] = resp
          const { message } = retData
          setLoadingApi(false)
          if (message == 'Running'){
            const { doneInstrumentsArr } = retData
            setDoneInstruments(doneInstrumentsArr)
          }
          else if (message == 'Done'){
            clearInterval(handle)
            setAllDone(message)
          }
        })
      }, 5000)
    }
  }, [jobId])

  return(
    <>
    { (allDone && !loadingApi)
      ?
      <SpacedRow justifyContent="start">
        <Col sm={10}>
          <SuccessNotification message={allDone} />
        </Col>
      </SpacedRow>
      :
      <>
        <Row justifyContent="center">
          <Col sm="auto">
            <Timeline>
              <Timeline.Item icon={<TickIcon/>}>
                <Timeline.Content>
                  <StyledSpan>
                    Submitted Spreadsheet Data
                  </StyledSpan>
                </Timeline.Content>
              </Timeline.Item>
              {instrumentsToTimeline(doneInstruments)}
            </Timeline>
          </Col>
        </Row>
        <SpacedRow justifyContent="center">
          <Col textAlign="center">
            <Dots size={48} />
          </Col>
        </SpacedRow>
      </>
    }
    </>
  )

}

export default CheckProgressStep
