import {
  Landmark,
  LayoutDashboard,
  HandCoins,
  CircleDollarSign,
  PiggyBank,
  Gem,
  Settings,
  Search,
  LineChart,
  Users2,
  Package,
  ShoppingCart,
  PanelLeft
} from 'lucide-react'

import { TooltipProvider } from '@/components/ui/tooltip'

import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import SidenavItem from '@/components/sidenav-item'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import PathView from '@/components/path-view'

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
        <header className="sticky top-0 z-30 flex h-14 py-2 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <a
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <ShoppingCart className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </a>
                <a href="#" className="flex items-center gap-4 px-2.5 text-foreground">
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <PathView />

          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder-user.jpg"
                  // width={36}
                  // height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">aaaa</main> */}
        <main className="bg-green-700 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home
