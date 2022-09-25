
const isObject = item => typeof item === 'object' && item !== null;

export const RecursiveComponent = ({ data }) => {

  if (!isObject(data)) {
    return <li>{data}</li>
  }

  const pairs = Object.entries(data);

  return (
    <>
    {pairs.map(([key, value]) => (
        <li>
         {key}:
         <ul>
            <RecursiveComponent data={value} />   
          </ul> 
        </li>
      ))}
    </>
  )
}
