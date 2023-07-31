import { Alert } from './chapt4Styling/Alert'

export default function App() {
  return (
    <div className='container'>
      <Alert type='warning' heading='Extreme Danger' closable={true} onClose={()=>console.log("closed")}>
        WE are just saying
      </Alert>
      <Alert type="information" heading="Success" closable={true}>
        Everything is really good!
      </Alert>
    </div>
  )
}