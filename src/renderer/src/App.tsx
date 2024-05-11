import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  // const [counter, setCounter] = useState(0)

  // const increase = (): void => {
  //   setCounter(counter + 1)
  // }

  // const decrease = (): void => {
  //   setCounter(counter - 1)
  // }

  return (
    <div className="h-screen w-full">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
