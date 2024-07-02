import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import TimelinePage from './pages/timeline';
import HerPage from './pages/her';
import QuoToPage from './pages/quo_to';
import GuestBookPage from './pages/guestbook';
import ActivityQueuePage from './pages/act_queue';
import BucketPage from './pages/bucket';
import PoetryPage from './pages/poetry';
import DreamBoardPage from './pages/dream_board';


/**
 * currently using Material UI Icons
 * *  https://mui.com/material-ui/material-icons/?theme=Outlined
 * will be using preset images for background purposes
 * blue heart color value: #096fad
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/timeline" element={<TimelinePage/>}/>
      <Route path="/queue" element={<ActivityQueuePage/>}/>
      <Route path="/quotes" element={<QuoToPage/>}/>
      <Route path="/poetry" element={<PoetryPage/>}/>
    </Routes>
  );
}

export default App;
