import MainRouter from "./Route/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import {UserProvider} from "Context/UserContext";
function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  

  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
        <MainRouter />
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
