import { Card } from './components/card'
import '@sync-skeleton/core/skeleton.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card />
      <div style={{ marginLeft: 16 }}>
        <Card />
      </div>
      <div style={{ marginLeft: 32 }}>
        <Card />
      </div>
    </div>
  )
}

export default App
