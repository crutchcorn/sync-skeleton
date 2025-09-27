import '@sync-skeleton/core/skeleton.css'
import './index.css'
import { Card } from './components/card'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card />
      <div style={{ marginLeft: '10rem' }}>
        <Card dark={true} />
      </div>
      <div style={{ marginLeft: '20rem' }}>
        <Card className="orange-purple-loader" />
      </div>
    </div>
  )
}

export default App
