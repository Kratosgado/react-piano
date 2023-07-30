import { Alert } from "./components/Alert";

export default function App() {
  return (
    <div className="App">
      <h1>Hello KratosGado</h1>
      <h2>Start editing to see some magic</h2>
      <Alert type="information" heading="Succes">
        Everything is really good!
      </Alert>
    </div>
  )
}