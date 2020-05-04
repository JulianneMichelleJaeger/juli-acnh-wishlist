import React from 'react';
import thankYouList from '../data/thank-yous.json';

class Thanks extends React.Component {
  renderThankYous() {
    const thankYous = thankYouList.map((thankYou) =>
      <div key={thankYou.id} className="thank-you">
        {thankYou.img && <img src={thankYou.img} alt={thankYou.item} className="thank-you-img" />}
        <strong className="heart">♥</strong> Thank you so much 
        to <strong>{thankYou.name}</strong> from <strong>{thankYou.island}</strong> for my brand 
        new <strong>{thankYou.item}</strong>! <strong className="heart">♥</strong>
      </div>
    );
    return thankYous;
  }

  render() {
      return (
        <div>
          <h1>Thank You!</h1>
          {this.renderThankYous()}
        </div>
      );
  }
}

export default Thanks;