
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Samsung Mobile",
      brand: "Samsung",
      price: 20000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "iPhone",
      brand: "Apple",
      price: 70000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "HP Laptop",
      brand: "HP",
      price: 50000,
      category: "Computer"
    },
    {
      id: 4,
      name: "Boat Headphones",
      brand: "Boat",
      price: 2000,
      category: "Accessories"
    }
  ];

  

  return (
      <>
       <div>

      <h1>Single Product Details</h1>

      <h2>{selectedProduct.name}</h2>

      <p>Product ID: {selectedProduct.id}</p>

      <p>Brand: {selectedProduct.brand}</p>

      <p>Price: {selectedProduct.price}</p>

      <p>Category: {selectedProduct.category}</p>

    </div>
      
      
      
      
      </>
  );

}
export default ProductDetails;
