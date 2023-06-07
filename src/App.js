import React from 'react';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div class="header__logo">
          <img width="38" src="./img/video-logo.svg" alt="Video logo" ></img>
        <div>
          <h1>Video Service</h1>
          <p>надпись для отображения</p>
        </div>
        </div>
      </div>
      <div className="contant">
        <div className="container">
          <div class="content__top"></div>
          {/* <Categories/>
          <Sort/> */}
        </div>
        {/* <h2 class="content__title">All</h2> */}
      <div class="content__item">
        {/* <VideoBlock/> */}
      </div>
      </div>
    </div>
  );
}

export default App;
