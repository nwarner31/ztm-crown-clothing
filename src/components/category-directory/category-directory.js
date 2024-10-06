import CategoryItem from "../category-item/category-item";

import './category-directory.scss';


const CategoryDirectory = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map(category => {
                return <CategoryItem key={category.id} category={category} />
            })}

        </div>
    );
}


export default CategoryDirectory;