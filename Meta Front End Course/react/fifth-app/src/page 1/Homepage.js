import '../App.css'
import Time from '../General Components/Time'

const HomePage = () => {
    const date = new Date();
    const today = date.toLocaleDateString("en-IN");
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = days[date.getDay()];
    const time = date.toLocaleTimeString();

    return (
        <>
            <div className="center intro">
            <h1>Welcome to the Home Page!</h1>
            <h2>
                Here, you'll see all the stuff related to the home page.
            </h2>
            <p>Today is {today}, which is a {day}</p>
            </div>
        </>
    );
};

export default HomePage;