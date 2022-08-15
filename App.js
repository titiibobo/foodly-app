
import "./ignoreWarnings";
import { AuthProvider } from "./src/context/auth/authContext";
import Routes from "./src/navigation/Routes";



function App() {
    
  return (
    <AuthProvider>
       <Routes />
    </AuthProvider>
  );
}

export default App;
