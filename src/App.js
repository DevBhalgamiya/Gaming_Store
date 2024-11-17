import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Journey from './components/Journey';
import Match from './components/Match';
import Project from './components/Project';
import Team from './components/Team';
import Para from './components/Para';
import Trending from './components/Trending';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Journey />
      <Match />
      <Project />
      <Team />
      <Para />
      <Trending />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
