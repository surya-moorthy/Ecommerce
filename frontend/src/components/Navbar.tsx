import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"
import ThemeButton from "./ThemeButton"
import Dropdown from "./Dropdown"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [login, setLogin] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 
                    bg-zinc-100 dark:bg-neutral-900 
                    text-neutral-800 dark:text-neutral-200 
                    w-[95%] max-w-7xl px-4 py-4 
                    flex flex-col gap-4 
                    lg:flex-row lg:items-center lg:justify-between 
                    rounded-b-xl shadow-md">

      {/* Logo and Dropdown */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h2 className="font-medium text-xl lg:text-3xl font-serif">Basy Shops</h2>
        {isSmallScreen && <Dropdown />}
      </div>

      {/* Search */}
   
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
      

      {/* Desktop Navigation */}
      {!isSmallScreen && (
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center lg:justify-end gap-2">
            <NavigationMenuItem>
              <Button onClick={()=>{navigate('/product')}}>Products</Button>
            </NavigationMenuItem>
            {login ? (
              <NavigationMenuItem>
                <Button>Profile</Button>
              </NavigationMenuItem>
            ) : (
              <>
                <NavigationMenuItem>
                  <Button onClick={()=>{navigate('/signin')}}>Login</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button onClick={()=>{navigate('/register')}}>Register</Button>
                </NavigationMenuItem>
              </>
            )}
            <NavigationMenuItem>
              <ThemeButton />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  )
}
