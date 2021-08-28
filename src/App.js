import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Employee from './pages/forms/Employee'

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
          <Employee/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
