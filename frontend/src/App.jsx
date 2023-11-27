
import { UserProvider } from './componentes/Login/UserContext.jsx';
import AppContent from './componentes/AppContent/AppContent.jsx'
function App() {
  return (
    <>
    <UserProvider>
      <AppContent />
    </UserProvider>

    </>
  );
}

export default App;
