import { RecursiveComponent } from './RecursiveComponent'
import { DangerButton, BigSuccessButton } from './composition'
import { WarningButton } from './partiallyApply'

function Chapter6() {
  
  
  const nestedItems = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 'Hello'
      },
      b3: {
        b31: {
          message: 'Hi'
        },
        b32: {
          message: 'Hello'
        }
      }
    },
    c: {
      c1: 2,
      c2: 3
    }
  }

  return (
    <>
    <h3>RecursiveComponent</h3>
    <RecursiveComponent data={nestedItems} />
    <h3>Composition</h3>
    <DangerButton text="Danger" />
    <BigSuccessButton text="Success" />
    <h3>Partially Apply</h3>
    <WarningButton text="Warning" />
    </>
  );
}

export default Chapter6;
