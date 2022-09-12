import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallProductListItem } from './product/SmallProductListItem';
import { LargeProductListItem } from './product/LargeProductListItem';
import { Modal } from './Modal';
import people from '../users.json'
import products from '../products.json'


const LeftHandComponent = ({ title, children }) => {
  return <div style={{ backgroundColor: '#88c7dc' }}>
    <h2>{title}</h2>
    {children}
  </div>
}
const RightHandComponent = ({ title, children }) => {

  return <div style={{ backgroundColor: '#A3E1D4' }}>
    <h2>{title}</h2>
    {children}
  </div>
}

function Chapter1() {
  return (
    <>
      <h2>Modal</h2>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>

      <SplitScreen leftWeight={1} rightWeight={1}>
        <LeftHandComponent title="People">
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem}
          />

          <RegularList
            items={people}
            resourceName="person"
            itemComponent={LargePersonListItem}
          />


        </LeftHandComponent>
        <RightHandComponent title="Products">

          <RegularList
            items={products}
            resourceName="product"
            itemComponent={SmallProductListItem}
          />

          <RegularList
            items={products}
            resourceName="product"
            itemComponent={LargeProductListItem}
          />
        </RightHandComponent>
      </SplitScreen>


    </>
  );
}

export default Chapter1;
