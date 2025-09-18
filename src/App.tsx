import { Card } from "./components/card"
import { useSkeletonSetup } from "./lib/react"
import "./skeleton.css"

function App() {
  useSkeletonSetup();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card />
      <div style={{ marginLeft: 16 }}> <Card /></div>
      <div style={{ marginLeft: 32 }}><Card /></div>
    </div>
  )
}

export default App
