function ProductItem({ product }) {
    const [hovered, setHovered] = React.useState(false);

    // Заглушка для функции handleAddToCartAndRedirect
    const handleAddToCartAndRedirect = (product) => {
        console.log("Adding product to cart:", product);
    };

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

            {/* Отображаем cart-icon при наведении */}
            {hovered && (
                <button className="cart-icon" onClick={() => handleAddToCartAndRedirect(product)}>
                    <i className="fa fa-shopping-cart"></i>
                </button>
            )}

            <DeleteProduct product={product} />
        </div>
    );
}
