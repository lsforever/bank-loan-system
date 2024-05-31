import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'
import { ThemeProvider } from '@/components/theme-provider'

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
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-screen w-full">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
