
const Product = () => {

  
  const product = {
    
    name: "Samsung Smartphone",
    price: 20000,
    brand: "Samsung",
    category: "Electronics"
  };

  return (
    <>
      <div>
        <h1>Product Details</h1>

        <h2>Name: {product.name}</h2>

        <h2>Brand: {product.brand}</h2>

        <h2>Category: {product.category}</h2>

      

        <h2>Discounted Price: ₹{product.price * 0.9}</h2>

        <h2>Original Price: ₹{product.price}</h2>
      </div>
    </>
  );
};

export default Product;
