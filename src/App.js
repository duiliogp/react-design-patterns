import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallProductListItem } from './product/SmallProductListItem';
import { LargeProductListItem } from './product/LargeProductListItem';


const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];
 


const LeftHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: '#3cb371' }}>{name}</h1>
}
const RightHandComponent = ({message}) => {
  return <p style={{ backgroundColor: '#ff6347' }}>{message}</p>
}

function App() {
  return (
    <>
    <h2>Persons</h2>
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

      <h2>Products</h2>

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

      <h2>Split Screen</h2>

    <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftHandComponent name="Teste" />
    <RightHandComponent message="Teste." />
   </SplitScreen>
      </>
  );
} 

export default App;
 