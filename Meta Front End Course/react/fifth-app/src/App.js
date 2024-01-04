
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './page 1/Homepage';
import ContactMe from './page 2/ContactMe';
import {Routes, Route, Link} from 'react-router-dom';
import Time from './General Components/Time'
import MyFavVideo from './page 3/MyFavVideo';
import Navigator from './General Components/Navigator';
import Form from './page 4/Form'

function App() {
  return (
    <div className="App">

      <Navigator />
      <Time/>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact-me" element={<ContactMe/>} />
        <Route path="/my-fav-song" element={<MyFavVideo/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
