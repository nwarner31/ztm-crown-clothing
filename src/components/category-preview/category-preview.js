import { CategoryPreviewContainer, Title, Preview } from './category-preview-style';
import ProductCard from "../product-card/product-card";
import {Link} from "react-router-dom";


const CategoryPreview = ( { title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title><Link to={`/shop/${title}`}>{title.toUpperCase()}</Link></Title>
            </h2>
            <Preview>
                { products.slice(0,4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    );
}


export default CategoryPreview;