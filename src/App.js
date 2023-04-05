import './App.css';
import Body from './Body';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
    <Routes>
      <Route path='/weatherforecasts' Component={Body}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
