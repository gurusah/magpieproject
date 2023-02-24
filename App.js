import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Stake from './components/Stake';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Stake />} />
          <Route path='/claim' element={<h1>Claim page</h1>} />
          <Route path='/lock' element={<h1>lock page</h1>} />
          <Route path='/docs' element={<h1>docs page</h1>} />
          <Route path='/governance' element={<h1>governance page</h1>} />
          <Route path='/bribe' element={<h1>bribe page</h1>} />
          <Route path='/referral' element={<h1>referral page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
