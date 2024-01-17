import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Heading from "./Heading";

function Header(props){
  let name = props.name ? props.name : "User";
  return <h1>Greetings {name}!</h1>
}

function Navbar(){
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}

// function App() {
//   let title = "My First React App"
//   return (
//     <>
//     <br/>
//     {title + ":"}
//     <Header name="Rudra"/>
//     <Navbar/>
//     </>
//   );
// }

function App() {
  return <Heading name=""/>;
}

export default App;
