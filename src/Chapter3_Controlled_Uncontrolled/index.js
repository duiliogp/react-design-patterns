import styled from 'styled-components'
import { useState } from 'react'
import { ControlledForm } from "./1_ControlledForm";
import { UncontrollerForm } from "./1_UncontrolledForm";
import { UncontrolledModal } from "./2_UncontrolledModal";
import { ControlledModal } from "./2_ControlledModal";
import { UncontrolledOnboardingFlow } from "./3_UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./3_ControlledOnboardingFlow";
import { StepOne, StepTwo, StepThree, StepFour, AllStepFinished } from "./Steps";

const H2 = styled.h2`
  background-color:#eee;
  font-size:20px;
`;

function Chapter3() {

  // ONBOARDINGFLOW
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    console.log('StepData:',stepData);
   setOnboardingData({...onboardingData, ...stepData});
   setCurrentIndex(currentIndex+1);
  }


  // MODAL
  const [shouldShowModal, setShouldShowModal] = useState(false);


  return <>

<H2>Controlled OnboardingFlow</H2>

<ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
  <StepOne />
  <StepTwo />
  {onboardingData.age > 60 && <StepThree />}
  <StepFour />
  <AllStepFinished />
</ControlledOnboardingFlow>

<H2>Uncontrolled OnboardingFlow</H2>
<UncontrolledOnboardingFlow onFinish={data => console.log('Onboarding Finished!', data)}>
  <StepOne />
  <StepTwo />
  <StepFour />
</UncontrolledOnboardingFlow>


    <H2>Controlled Modal</H2>
    <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false) }>
      <h1>Hello!</h1>
    </ControlledModal>
    <button onClick={() => setShouldShowModal(!shouldShowModal)}>
      {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
    </button>
    
    <H2>Uncontrolled Modal</H2>
    <UncontrolledModal />


    <H2>Controlled Form</H2>
    <ControlledForm />
    <H2>Uncontrolled Form</H2>
    <UncontrollerForm />

  </>
}

export default Chapter3;


