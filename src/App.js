import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainDash from './Components/MainDash';
import RightSide from './Components/RightSide';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar />
      <MainDash />
      <RightSide />
      </div>
    </div>
  );
}

export default App;
