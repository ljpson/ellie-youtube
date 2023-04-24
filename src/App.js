import { Outlet } from "react-router-dom";
import SearchHeaher from "./components/SearchHeaher";

function App() {
  return (
    <div>
      <div>
      <SearchHeaher />
      </div>
      <div>
      <Outlet />
      </div>
  </div>
  ) 
}

export default App;
