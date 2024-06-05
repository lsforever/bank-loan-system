import { ElectronAPI } from '@electron-toolkit/preload'
import { T_API } from './api/index'
declare global {
  interface Window {
    electron: ElectronAPI
    api: T_API
  }
}
