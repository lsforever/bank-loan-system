import {
  Landmark,
  LayoutDashboard,
  HandCoins,
  CircleDollarSign,
  PiggyBank,
  Gem,
  Settings
} from 'lucide-react'

import { TooltipProvider } from '@/components/ui/tooltip'

import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import SidenavItem from '@/components/sidenav-item'

import { ModeToggle } from '@/components/mode-toggle'

const Home = () => {
  const [currentActive, setCurrentActive] = useState('dashboard')

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <a
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Landmark className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Bank Inc</span>
            </a>

            <SidenavItem
              path="dashboard"
              text="Dashboard"
              Icon={LayoutDashboard}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
            <SidenavItem
              path="loans"
              text="Loans"
              Icon={HandCoins}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
            <SidenavItem
              path="leasing"
              text="Leasing"
              Icon={CircleDollarSign}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
            <SidenavItem
              path="overdraft"
              text="Overdraft"
              Icon={PiggyBank}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
            <SidenavItem
              path="pawning"
              text="Pawning"
              Icon={Gem}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <ModeToggle />
            <SidenavItem
              path="settings"
              text="Settings"
              Icon={Settings}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
          </nav>
        </TooltipProvider>
      </aside>

      <div className="flex flex-col sm:pl-14 min-h-screen">
        {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">aaaa</main> */}
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home
