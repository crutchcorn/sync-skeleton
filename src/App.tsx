import { Card } from "./components/card"
import { SkeletonProvider } from "./lib/skeleton"
import "./skeleton.css"

function App() {
  return (
    <SkeletonProvider>
      <Card/>
    </SkeletonProvider>
  )
}

export default App
