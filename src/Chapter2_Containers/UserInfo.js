export const UserInfo = ({user}) => {
  const { name, age, hairColor, hobbies } = user || {}  ;

  return user ? 

  (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </> 
  ) : <p>Loading...</p>;

}