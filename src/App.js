import MainRouter from "./Route/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
