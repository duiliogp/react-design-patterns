import React from 'react';

export const StepOne = ({ goToNext }) => {
  const nameInput = React.createRef();
  return <>
    <h4>Name</h4>
    <input type="text" ref={nameInput} maxLength="25" />
    <button onClick={() => goToNext({ name: nameInput.current.value })}>Next</button>
  </>;
}


export const StepTwo = ({ goToNext }) => {
  const ageInput = React.createRef();
  return <>
    <h4>Age</h4>
    <input type="number" ref={ageInput} maxLength="2" />
    <button onClick={() => goToNext({ age: ageInput.current.value })}>Next</button>
  </>
}

export const StepThree = ({ goToNext }) => {

  return <>
    <h4>You qualify for our senior discount.</h4>
    <button onClick={() => goToNext()}>Next</button>
  </>
}

export const StepFour = ({ goToNext }) => {
  const hairColorInput = React.createRef();
  return <>
    <h4>Hair Color</h4>
    <input type="number" ref={hairColorInput} maxLength="2" />
    <button onClick={() => goToNext({ hairColor: hairColorInput.current.value })}>Next</button>

  </>
}


export const AllStepFinished = () => {
  return <>
    <h4>Congratulations! You finished all steps.</h4>
    <button>Restart</button>
  </>

}

