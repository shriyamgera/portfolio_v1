import './App.css';
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
      </div>
    </div>
  );
}

export default App;
