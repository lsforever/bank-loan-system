import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

import { ElementType } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

type NavItemProps = {
  path: string
  text: string
  Icon: ElementType
  currentActive: string
  setCurrentActive: Dispatch<SetStateAction<string>>
} & React.HTMLAttributes<HTMLDivElement>

const SidenavItem = ({ path, text, Icon, currentActive, setCurrentActive }: NavItemProps) => {
  const navigate = useNavigate()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            { 'bg-accent text-accent-foreground': currentActive == path }
          )}
          onClick={() => {
            navigate(path)
            setCurrentActive(path)
          }}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{text}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="right">{text}</TooltipContent>
    </Tooltip>
  )
}

export default SidenavItem
