import React from 'react';
import itemList from '../data/items.json';

class Category extends React.Component {
    renderItems() {
        const categoryItems = itemList.filter((item) => item.category === this.props.category.key);
        const items = categoryItems.map((item) =>
            <div key={item.id} className="item">
                {item.img && <img src={item.img} alt={item.name} className="item-img" />}
                <h2>{item.name}</h2>
                {item.color && 
                    <div className="item-info">
                        <strong>Color Wanted:</strong> {item.color}
                    </div>
                }
                <div className="item-info">
                    <strong>Amount Wanted:</strong> {item.amount}
                </div>
            </div>
        );
        return items;
    }

    render() {
        return (
            <div className="category-container">
                <h1>{this.props.category.name}</h1>
                {this.renderItems()}
            </div>
        );
    }
}

export default Category;