import React from 'react';
import acnh from '../images/acnh.jpg';

class Donate extends React.Component {
  render() {
      return (
        <div>
          <h1>Want to Donate?</h1>
          <div id="donate">
            <img id="acnh" className="image" src={acnh} alt="acnh" />
            <p>If you would like to send me any of the items on my wishlist, please contact me!</p>
            <p>
              <div className="contact">
                <strong>E-mail:</strong> julithejaeger@gmail.com
              </div>
              <div className="contact">
                <strong>Discord:</strong> thatjuliperson#0926
              </div>
              <div className="contact">
                <strong>Twitter:</strong> @thatjuliperson
              </div>
            </p>
            <p className="signature">
              <strong>Thank you! <span className="heart">♥</span></strong>
            </p>
            
          </div>
        </div>
      );
  }
}

export default Donate;