import React from 'react';
import Category from '../components/Category.js';
import '../styles/Wishlist.scss';

const categories = [
  {key: "outside", name: "Outside"},
  {key: "livingRoom", name: "Living Room"},
  {key: "bedroom", name: "Bedroom"},
  {key: "kitchen", name: "Kitchen"},
  {key: "bathroom", name: "Bathroom"},
  {key: "diner", name: "Diner"}
];

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategories: true,
      category: null
    };
  }

  toggleView(cat) {
    this.setState((state) => ({
      showCategories: !state.showCategories,
      category: cat
    }));
  }

  renderCategories() {
    const categoryList = categories.map((category) => 
      <li key={category.key} onClick={this.toggleView.bind(this, category)}>
        <div>{category.name}</div>
      </li>
    );
    return <ul className="categories">{categoryList}</ul>;
  }

  render() {
    return (
      <div>
        {this.state.showCategories && <h1>Wishlist</h1>}
        {this.state.showCategories && this.renderCategories()}
        {!this.state.showCategories && 
          <strong className="back" onClick={this.toggleView.bind(this, null)}>
            &lt; Back
          </strong>
        }
        {!this.state.showCategories && <Category category={this.state.category} />}
      </div>
    );
  }
}

export default Wishlist;