import MainRouter from "./Router";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })
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
