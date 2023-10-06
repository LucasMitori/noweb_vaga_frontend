import AuthProvider from "./context/AuthContext";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
