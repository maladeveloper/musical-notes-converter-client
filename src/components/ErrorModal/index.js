import React, { useState } from 'react';
import { MD } from '@zendeskgarden/react-typography'
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';


const messageToVars = {
  "Unable to Access Spreadsheet": {
    title: "Spreadsheet Cannot be Accessed!",
    body: `The Spreadsheet specified cannot be accessed. Please check that Editor Access 
    has been granted to the email outlined in step one and whether the Spreadsheet name has been entered in correctly.`
    
  },
   "Worksheet Not Found": { 
     title: "Worksheet Cannot be Found!",
     body: `The Worksheet specified cannot be found. Please make sure the Worksheet exists in the given
     Spreadsheet and whether the Worksheet name has been correctly entered.`
     
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
        <MD>{body}</MD>
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
