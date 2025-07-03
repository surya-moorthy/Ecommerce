import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { AlignJustify } from 'lucide-react'
import { Button } from './ui/button'

export default function Dropdown() {
  const [login, setLogin] = useState(false)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <AlignJustify size={40}/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 flex flex-col gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-md shadow-lg p-2"
        align="start"
      >
        {login ? (
          <DropdownMenuItem asChild>
            <Button className="w-full justify-start" variant="ghost" >
              Profile
            </Button>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Button className="w-full justify-start" variant="ghost">
                Login
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button className="w-full justify-start" variant="ghost">
                Register
              </Button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
