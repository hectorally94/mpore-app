import './App.css';
import { Myrouter } from './Myrouters/Myrouter';
import { NavBar } from './NavBar/NavBar';
function App() {
  return (
    <div className="bg-blue-50 dark:bg-gray-800">
   <NavBar/>
   <Myrouter/>
            
    </div>
  );
}

export default App;
