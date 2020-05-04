import React from 'react';
import villager from '../images/acnh-villager.JPG';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>

        <div id="about">
          <img className="image" src={villager} alt="acnh-villager" />
          <p>
            Hello, and welcome to my <strong>ACNH Wishlist</strong>! My name is <strong>Juli</strong>, and I am a huge Animal Crossing fan!
            I've put in hundreds of collective hours across all titles so far, from the humble beginnings of the Game Cube version to
            New Leaf on the 3DS. So far New Horizons has definitely been my favorite, and I have immensely enjoyed creating an island paradise!
          </p>
          <p>
            A few facts about me: My island's name is <strong>Sugarie</strong>, it is <strong>sweets</strong> themed, and I have been putting 
            so much time into making it beautiful! My native fruit is the <strong>cherry</strong>, which is fitting, 
            since <strong>Cherry</strong> is my favorite villager in the game! I would absolutely love to have her, along 
            with <strong>Merengue</strong> and <strong>Cookie</strong>. Some of the villagers I do have whom I love 
            are <strong>Daisy</strong> and <strong>Hornsby</strong>, they're so cute!
          </p>
          <p>
            Anyway, thank you so much for visiting, and I hope you decide to help me achieve my ACNH goals!
          </p>
          <p className="signature">
            <strong>~ Juli <span className="heart">♥</span></strong>
          </p>
        </div>
      </div>
    );
  }
}

export default About;