import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import AddProduct from "../../Components/AddProduct/AddProduct";
import DeleteProduct from "../../Components/DeleteProduct/DeleteProduct";
import Title from "../../Components/Title/Title";

export default function Shop() {
    const { products } = useContext(AppContext);
    const handleAddToCartAndRedirect = (product) => {
        console.log("Adding product to cart:", product);
    };
    return (
        <>
            <div className="BestSellerContent">
                <div className="tit"><Title>All products</Title></div>
                <div className="ProductList">
                    <AddProduct />
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

function ProductItem({ product }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div className="product">
            <Link to={"/products/" + product.slug}>
                <img
                    src={product.img}
                    alt={product.name}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </Link>
            <hr />
            <Link to={"/products/" + product.slug} className="text">
                {product.name}
            </Link>
            <p className="description">{product.desc}</p>
            <span>${product.price}</span>

            <div className="actions" style={{ opacity: hovered ? 1 : 0 }}>
                <AddToCart product={product} />
            </div>
            <DeleteProduct product={product} />
        </div>
    );
}
