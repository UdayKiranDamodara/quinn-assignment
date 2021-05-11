import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import './App.css';

import Days from "./components/Days";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  const today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()-14);
  console.log(typeof(String(today)))
  return (
    <div className="App">
      {/* <h1>Today: {String(today)}</h1>
      <h1>lastWeek: {String(lastWeek)}</h1> */}
      {/* <Header></Header> */}
      <Days></Days>
      <Grid></Grid>
    </div>
  );
}

export default App;
