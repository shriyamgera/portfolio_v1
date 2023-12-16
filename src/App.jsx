import './App.css';
import { AboutMe } from './Components/AboutMe';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import LeftSidebar from './Components/LeftSidebar';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import RightSidebar from './Components/RightSidebar';

function App() {
  return (
    <div className='custom-scrollbar'>
      <Navbar/>
      <LeftSidebar/>
      <RightSidebar/>
      <div className='flex flex-col items-center justify-center'>
        <Introduction/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
