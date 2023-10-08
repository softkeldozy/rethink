import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import '../src/App.css';
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <>

        <div className="container">
          <Sidebar />
          <div className="content">
            <Topbar />
            <Home />
          </div>

        </div>

      </>
    </div>
  );
}

export default App;
