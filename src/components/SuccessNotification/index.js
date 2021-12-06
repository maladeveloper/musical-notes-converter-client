import React, { useState } from 'react';
import { Alert, Title, Close } from '@zendeskgarden/react-notifications';

const messageToBody = {
  "Started": `A new process to edit the specified Spreadsheet has begun.`,
  "Currently Running": `An existing processes is already editting the spreadsheet`,
}

const SuccessNotification = ({ message, setVisible }) => {
  const body = messageToBody[message] || 'Successfully begun'
  return(
    <Alert type="success">
      <Title>Success</Title>
        {body}
    </Alert>
  )
}

export default SuccessNotification
