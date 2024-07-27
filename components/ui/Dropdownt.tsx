import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HeadphonesIcon, Settings, Tag, User, Wallet } from "lucide-react"
import { AvatarDemo } from "./avtar2"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null}>
          <AvatarDemo/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 font-manrope font-bold">
        <DropdownMenuGroup>
          <DropdownMenuItem>
           <Wallet className="mr-2"/> Wallet
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Tag className="mr-2"/>Promos
          </DropdownMenuItem>
          <DropdownMenuItem>
           <HeadphonesIcon className="mr-2"/> Support
          </DropdownMenuItem>
          <DropdownMenuItem>
           <User className="mr-2"/> Manage account
          </DropdownMenuItem>
          <DropdownMenuItem>
           <Settings className="mr-2"/>Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
