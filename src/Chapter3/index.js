import styled from 'styled-components'

import { ControlledForm } from "./ControlledForm";
import { UncontrollerForm } from "./UncontrolledForm";
// import { UncontrolledModal } from "./UncontrolledModal";

const H2 = styled.h2`
  background-color:#eee;
  font-size:20px;
`;

function Chapter3(){
  return <>
    <H2>Controlled Form</H2>
    <ControlledForm />
    <H2>Uncontrolled Form</H2>
    <UncontrollerForm />
  
  </>
}

export default Chapter3;