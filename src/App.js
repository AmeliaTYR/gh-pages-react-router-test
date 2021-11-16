import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/gh-pages-react-router-test' exact component={Homepage}/>
         <Route path='/gh-pages-react-router-test/secondpage' exact component={SecondPage}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;