/* eslint-disable max-len */
import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './Components/Calculator';
import './app.css';

function NavBar() {
  return (
    <nav>
      <h1>Math Magician</h1>
      <Link to="/">Home</Link>
      <Link to="/about">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}
function Home() {
  return (
    <div className="HomePage">
      <main className="HomeInfo">
        <h2 className="HomeTitle">Welcome to the homepage!</h2>
        <p className="HomeText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit quam quis lorem luctus suscipit quis et eros. Suspendisse potenti. Cras mollis condimentum placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras velit ipsum, ultricies at est sit amet, aliquam suscipit felis. Donec id interdum odio. Duis sed enim vel enim faucibus aliquet. Donec aliquet lectus et urna egestas luctus. Maecenas eget lectus iaculis, auctor dui vel, vulputate lectus. Sed semper iaculis bibendum.

          In nunc arcu, vestibulum sed interdum eget, dignissim vulputate metus. Cras pulvinar quam sit amet arcu ullamcorper, non porta magna laoreet. Aliquam enim augue, lobortis at mauris eget, pharetra bibendum enim. Nam sollicitudin lorem sed ullamcorper imperdiet. Mauris id sapien id tellus consectetur blandit vel eu eros. Cras tempus elementum tortor tempor tincidunt. Suspendisse varius, massa ut sagittis bibendum, lacus ligula accumsan tortor, sed placerat massa purus vel orci. Ut bibendum porta arcu at dignissim. Phasellus ullamcorper metus vitae diam placerat dictum. Etiam ut velit eu enim aliquet lobortis. Sed feugiat pharetra vestibulum.

          Etiam vitae luctus ex. Donec ut magna elementum, convallis ex sed, sollicitudin nulla. Nulla a porttitor erat. Quisque pulvinar, sem non elementum congue, leo lorem fermentum lacus, ut volutpat sem magna id mi. Sed elit tortor, pretium eget sapien sit amet, suscipit maximus arcu. Integer pretium, mauris sit amet varius eleifend, mauris dui euismod neque, vel ultricies purus justo eget turpis. Proin vel ante vel risus maximus ullamcorper. Cras luctus, purus sed rhoncus bibendum, ex nisi bibendum odio, eu blandit metus dui non eros. Integer non magna dui. Praesent blandit nunc libero, efficitur ultricies augue sagittis nec. Etiam blandit urna ut rhoncus tincidunt. Quisque blandit feugiat lacus, in fermentum metus convallis vel. Fusce lectus tortor, efficitur ut pretium et, cursus in sem. Curabitur pulvinar ac mauris a tempor. Quisque at elementum odio, tempus consectetur augue.

        </p>
      </main>
    </div>
  );
}

function About() {
  return (
    <div className="AboutPage">
      <main className="AboutInfo">
        <h2 className="AboutTitle">Let`s do some Math!</h2>
        <Calculator />
      </main>
    </div>
  );
}

function Quotes() {
  return (
    <div className="QuotesPage">
      <main className="QuotesInfo">
        <h2 className="QuotesTitle">Daily Quote</h2>
        <p className="Quote">If you can`t explain it simply, you don`t understand it well enough. - Albert Einstein</p>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export {
  App, Home, About, Quotes, NavBar,
};
