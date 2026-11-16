
import { useNavigate } from "react-router-dom";

const ProductList = () => {

      const move = useNavigate();


const products=[{id:1,name:"samsung phone",   
                  Brand:"samsung",
                   price:50000,
                  category:"electronics"},
                 { id:2,name:"vivo phone",
                  Brand:"vivo",
                   price:50000,
                  category:"electronics"},
                  {   id: 3,
                      name: "HP Laptop",
                      brand: "HP",
                      price: 50000,
                      category: "Computer"},
                      {    id: 4,
                            name: "Boat Headphones",
                            brand: "Boat",
                           price: 2000,
                           category: "Accessories"
                      }  ]
                      const selectedproduct=products.find(
                        (product)=>product.id===number(id)
                      );

                      if(!selectedproduct){
                        return <h2>product not found</h2>
                      }
    
  return (
      <>
      
      
      <div>
        <h1>Product List</h1>
        {products.map(()=>(
            <div>
                <h2>{product.id}</h2>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <button onClick={()=> navigate(`product${product.id}`)}>view details</button>
            </div>
        ))}
      </div>
      
      
      </>)
}

export default ProductList