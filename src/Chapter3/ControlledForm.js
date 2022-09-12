import {useState, useEffect} from 'react'

export const ControlledForm = () => {

  const [nameInputError, setNameInputError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState('');

  
  useEffect(() => {
    if(name.length < 2){
      setNameInputError('Name must be two or more characters.');
    }else{
      setNameInputError('');
    }
  }, [name])
  
  

  const handleSubmit = e => {
    console.log('submited!');
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
    <p>{nameInputError}</p>
    <input name="name" type="text" placeholder="Name"  value={name} onChange={e => setName(e.target.value)} />
    <input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
    <input name="haircolor" type="text" placeholder="HairColor" value={hairColor} onChange={e => setHairColor(e.target.value)} />
    <button>Submit</button>
  </form>
  )
}
