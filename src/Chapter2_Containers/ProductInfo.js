export const ProductInfo = ({ product={} }) => {

  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h5>Description</h5>
      <p>{description}</p>
      <p>Average rating: {rating}</p>
    </> 
  ) : <p>Loading product...</p>;

}