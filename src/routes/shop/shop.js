import { ProductsContext } from "../../contexts/products-context";
import ProductCard from "../../components/product-card/product-card";
import './shop.scss';

import { useContext } from "react";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map(product => {
                const {id, name} = product;
                return (<ProductCard key={id} product={product} />)
            })}
        </div>

    );
}

export default Shop;