import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const MAIN_FILM = {
  src: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
};

const FILMS = [
  {title: 'Fantastic Beasts: The Crimes of Grindelwald',
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {title: 'Bohemian Rhapsody',
    src: 'img/bohemian-rhapsody.jpg',
  },
  {title: 'Macbeth',
    src: 'img/macbeth.jpg',
  },
  {title: 'Aviator',
    src: 'img/aviator.jpg',
  },
  {title: 'We need to talk about Kevin',
    src: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {title: 'What We Do in the Shadows',
    src: 'img/what-we-do-in-the-shadows.jpg',
  },
  {title: 'Revenant',
    src: 'img/revenant.jpg',
  },
  {title: 'Johnny English',
    src: 'img/johnny-english.jpg',
  },
  {title: 'Shutter Island',
    src: 'img/shutter-island.jpg',
  },
  {title: 'Pulp Fiction',
    src: 'img/pulp-fiction.jpg',
  },
  {title: 'No Country for Old Men',
    src: 'img/no-country-for-old-men.jpg',
  },
  {title: 'Snatch',
    src: 'img/snatch.jpg',
  },
  {title: 'Moonrise Kingdom',
    src: 'img/moonrise-kingdom.jpg',
  },
  {title: 'Seven Years in Tibet',
    src: 'img/seven-years-in-tibet.jpg',
  },
  {title: 'Midnight Special',
    src: 'img/midnight-special.jpg',
  },
  {title: 'War of the Worlds',
    src: 'img/war-of-the-worlds.jpg',
  },
  {title: 'Dardjeeling Limited',
    src: 'img/dardjeeling-limited.jpg',
  },
  {title: 'Orlando',
    src: 'img/orlando.jpg',
  },
  {title: 'Mindhunter',
    src: 'img/mindhunter.jpg',
  },
  {title: 'Midnight Special',
    src: 'img/midnight-special.jpg',
  }];


ReactDOM.render(
  <React.StrictMode>
    <App
      mainFilm={MAIN_FILM}
      films={FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
