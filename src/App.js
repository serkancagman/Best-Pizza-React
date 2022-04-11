import MainRouter from "./Router";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()
  return (
  <>
    <QueryClientProvider client={queryClient}>
  <MainRouter/>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </>
  );
}

export default App;
