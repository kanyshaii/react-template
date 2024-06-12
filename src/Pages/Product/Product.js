import './Product.css';
import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div>
        <img className='product_img' src={product.img} alt={product.name} />
      </div>
      <div className='product_right'>
        <h1 className="product_tit">{product.name}</h1>
        <p className='product_price_all'><strong className="product_price">Price:</strong> {product.price}$</p>
        <p className='product_price_all'><strong className='product_price'>Description: </strong>{product.desc}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}