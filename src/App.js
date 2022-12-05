import './App.css';
import Men from './component/work/man';
import Kids from './component/work/kids';
import {
  Routes,
  Route,
} from "react-router-dom";
import Womans from './component/work/woman';
import Bags from './component/work/bags';
import Beg from './component/work/beg';
import SignUp from './component/work/signup';
import Login from './component/work/login';
// import DrawerAppBar from './component/work/mainNavbar';

function App() {
  return (
    // <DrawerAppBar/>
    <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/woman' element={<Womans />}></Route>
      <Route path='/man' element={<Men />}></Route>
      <Route path='/kids' element={<Kids />}></Route>
      <Route path='/bag' element={<Bags />}></Route>
      <Route path='/beg' element={<Beg />}></Route>
    </Routes>
  );
}

export default App;
