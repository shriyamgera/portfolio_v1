import './App.css';
import { AboutMe } from './Components/AboutMe';
import Introduction from './Components/Introduction';
import LeftSidebar from './Components/LeftSidebar';
import Navbar from './Components/Navbar';
import RightSidebar from './Components/RightSidebar';

function App() {
  return (
    <div>
      <Navbar/>
      <LeftSidebar/>
      <RightSidebar/>
      <div className='mx-[25%]'>
        <Introduction/>
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
