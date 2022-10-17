import './App.css';
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Testimonials from './components/Testimonials/Testimonials'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Intro from './components/Intro/Intro';
// import  Parallax  from './components/Parallax/Parallax';
function App() {
  return (
    <div>
    <Intro/>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    {/* <Parallax/> */}
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
