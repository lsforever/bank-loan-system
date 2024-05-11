import { Routes, Route } from 'react-router-dom'

import Home from '@/pages/home'
import Dashboard from '@/pages/dashboard'
import Loans from '@/pages/loans'
import Leasing from '@/pages/leasing'
import Overdraft from '@/pages/overdraft'
import Pawning from '@/pages/pawning'
import Settings from '@/pages/settings'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="loans" element={<Loans />} />
        <Route path="leasing" element={<Leasing />} />
        <Route path="overdraft" element={<Overdraft />} />
        <Route path="pawning" element={<Pawning />} />

        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Dashboard />} />
    </Routes>
  )
}

export default MainRoutes
