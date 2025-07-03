import { useState } from "react"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import ThemeButton from "./ThemeButton"

export default function Navbar() {
  const [login, setLogin] = useState(false)

  return (
    <div className="w-full px-4 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      
      {/* Logo */}
      <div className="text-center lg:text-left">
        <h2 className="font-medium text-xl lg:text-3xl font-serif">Basy Shops</h2>
      </div>

      {/* Search Bar */}
      <form className="flex flex-col sm:flex-row gap-2 bg-neutral-200 px-4 py-2 rounded-md w-full max-w-4xl mx-auto lg:mx-0">
        <input
          type="text"
          className="flex-1 rounded-lg bg-neutral-100 px-3 py-2 outline-none focus:outline focus:outline-neutral-500"
          placeholder="Search..."
        />
        <Button type="submit" className="w-full sm:w-auto">
          Search
        </Button>
      </form>

      {/* Navigation Buttons */}
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center lg:justify-end gap-2">
          <NavigationMenuItem>
            <Button>Products</Button>
          </NavigationMenuItem>

          {login ? (
            <>
              <NavigationMenuItem>
                <Button>Profile</Button>
              </NavigationMenuItem>
            </>
          ) : (
            <>
              <NavigationMenuItem>
                <Button>Login</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>Register</Button>
              </NavigationMenuItem>
            </>
          )}

          <NavigationMenuItem>
            <ThemeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
