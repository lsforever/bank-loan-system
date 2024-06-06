import { HashRouter } from 'react-router-dom'
// BrowserRouter
// MemoryRouter
import Routes from '@/routes'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

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
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
      {/* <Toaster richColors closeButton /> */}
      <Toaster richColors />
    </ThemeProvider>
  )
}

export default App
