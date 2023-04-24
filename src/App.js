import { Outlet } from "react-router-dom";
import SearchHeaher from "./components/SearchHeaher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <SearchHeaher />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>

    </>
  ) 
}

export default App;
