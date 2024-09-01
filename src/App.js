import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import CarouselBox from './Components/CarouselBox'
import SectionCategoryOfCases from './Components/SectionCategoryOfCases'
import AboutMe from './Components/AboutMe';
import Price from './Components/Price';
import Reviews from './Components/Reviews';
import Practice from './Components/Practice';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <CarouselBox></CarouselBox>
      </div>
      <div>
        <SectionCategoryOfCases></SectionCategoryOfCases>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
      <div>
        <Price></Price>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div>
        <Practice></Practice>
      </div>
      <div>
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
