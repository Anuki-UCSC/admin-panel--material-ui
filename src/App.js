import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Featuredinfo from './components/featuredinfo/Featuredinfo';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='container'>
        <div className='sidebarclass'>
        <Sidebar/>
        </div>
        <div className='otherclass'>
          {/* <Home/> */}
          <Featuredinfo/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
