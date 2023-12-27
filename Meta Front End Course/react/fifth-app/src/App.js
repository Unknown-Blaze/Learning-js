
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './page 1/Homepage';
import ContactMe from './page 2/ContactMe';
import {Routes, Route, Link} from 'react-router-dom';
import Time from './General Components/Time'
import MyFavVideo from './page 3/MyFavVideo';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/" className="nav-link">Home Page</Link>
            <Link to="/contact-me" className="nav-link">Contact Me</Link>
            <Link to="/my-fav-song" className="nav-link">My Favourite Song</Link>
            <form className="d-flex right" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
          </div>
        </div>
      </nav>
      <Time/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact-me" element={<ContactMe/>} />
        <Route path="/my-fav-song" element={<MyFavVideo/>} />
      </Routes>
    </div>
  );
}

export default App;
