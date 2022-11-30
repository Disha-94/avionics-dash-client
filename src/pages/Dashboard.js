import React from 'react';
import Main from '../components/Main';
import ReactPlayer from 'react-player';
import "../scss/pages/home.scss"
import articles from '../data/articles';


const Dashboard = () => {
  return (
    <Main
      description={'Avionics Dash Website, ENPM613 Project, Home Page '
        + 'ABC, and .'}
    >
      <h1> Welcome to Avionics Dash</h1>
      <div className="player-wrapper">
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=zXbqvvqt-lM'
          width='90%'
          height='80%'
          playing={false}
          loop={true}
        />
      </div>
      <div>
        <p style={{margin: "-6em 0 2em 0", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "large"}}>
          Avionics Dash is a private pilot is a self-directed study course that offers online programs in a variety of aircrafts tailored to satisfy your requirements whether it’s recurrent and re-qualification training from the comfort of their home.
          Our instructors set the industry standard for professional airline-oriented flight
          training and share your passion to become the best pilot to ever fly.
          You can have a look at our Programs for information on courses we offer and Discussion for community interaction. You can always write to us to know more.
        </p>
        <h3> Articles </h3>
        <ul className='articles'>
          {articles && articles.map((item, key) => {
            return (
              <li key={key}>
                <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
              </li>
            )
          }
          )}
        </ul>
      </div>
    </Main>
  );
}

export default Dashboard;
