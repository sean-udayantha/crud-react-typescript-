import { QueryClient, QueryClientProvider } from "react-query";
import { UserManagement } from "./pages/UserManagement";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserManagement />
    </QueryClientProvider>
  );
}

export default App;
