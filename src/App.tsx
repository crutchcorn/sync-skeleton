import { Card } from "./components/card"
import { SkeletonProvider } from "./lib/skeleton"

function App() {
  return (
    <SkeletonProvider>
      <Card/>
    </SkeletonProvider>
  )
}

export default App
