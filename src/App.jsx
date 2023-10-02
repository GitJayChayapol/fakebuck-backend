import Loading from "./components/Loading";
import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  const { intitialLoading } = useAuth()
  if(intitialLoading){
    return <Loading/>
  }
  return (
    <Route/>
  )
}

export default App
