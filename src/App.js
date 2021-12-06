import React from 'react';
import Form from './components/Form'
import Homepage from './components/Homepage'
import SubmissionFormStep from './components/SubmissionFormStep'
import ErrorModal from './components/ErrorModal'
import SuccessNotification from './components/SuccessNotification'

//<ErrorModal message={"Unable to Access Spreadsheet"} setVisible={()=>{}} />
//<SuccessNotification message={"Started"}  setVisible={()=>{console.log('i am closing')}} />
function App() {
  return (
    <div>
      <Homepage />
    </div>

  );
}

export default App;
