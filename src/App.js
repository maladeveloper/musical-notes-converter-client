import React from 'react';
import Form from './components/Form'
import Homepage from './components/Homepage'
import SubmissionFormStep from './components/SubmissionFormStep'
import ErrorModal from './components/ErrorModal'
import SuccessNotification from './components/SuccessNotification'
import CheckProgressStep from './components/CheckProgressStep'
import SimpleHeader from './components/SimpleHeader'

//<ErrorModal message={"Unable to Access Spreadsheet"} setVisible={()=>{}} />
//<SuccessNotification message={"Started"}  setVisible={()=>{console.log('i am closing')}} />
//<CheckProgressStep jobId={7558377} />
function App() {
  return (
    <div>
      <SimpleHeader/>
      <Homepage />
    </div>

  );
}

export default App;
