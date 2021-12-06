import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';


const messageToVars = {
  "Unable to Access Spreadsheet": {
    title: "Spreadsheet Cannot be Accessed!",
    body: `The Spreadsheet specified cannot be accessed.
    This maybe be due to factors such as the File Name of the Spreadsheet being
    incorrect or due to the fact that the first step has not been done and such
    the spreadsheet has not been shared with the relavant email`
  },
   "Worksheet Not Found": { 
     title: "Worksheet Cannot be Found!",
     body: `Spreadsheet can be accessed yet Worksheet is unable to be found. 
     This may be due to misspelling of the Worksheet specified.`
   },
   "Internal Server Error": { 
     title: "Unrecoverable Error has occured !",
     body: `An unrecoverable error has occured. Please try again later or
     contact Malavan Srikumar for more information.`
   }
}

const ErrorModal = ({ message, setVisible }) => {
  const { title, body } = messageToVars[message] || messageToVars["Internal Server Error"]
  console.log("the title", title)
  console.log("the body", body)

  return(
    <Modal onClose={() => setVisible(false)}>
      <Header isDanger>{title}</Header>
      <Body>
        {body}
      </Body>
      <Footer>
        <FooterItem>
          <Button onClick={() => setVisible(false)} isBasic>
            Try Again
          </Button>
        </FooterItem>
      </Footer>
      <Close aria-label="Close modal" />
    </Modal>
  )

}

export default ErrorModal
