import { Outlet } from "react-router-dom";
import SearchHeaher from "./components/SearchHeaher";

function App() {
  return (
    <div>
      <div style={{backgroundColor: 'lightgrey'}}>
      <SearchHeaher />
      </div>
      <div style={{backgroundColor: 'lightyellow'}}>
      <Outlet />
      </div>
  </div>
  ) 
}

export default App;
