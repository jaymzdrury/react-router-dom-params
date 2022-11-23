import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import List from './List';
import Lists from './Lists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lists />} />
        <Route path='/:id' element={<List />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
