import { useState } from "react"

export default function Navbar() {
  const [profile,setProfile] = useState(true);
  return (
    <div>
      <h2>
        Title
      </h2>
      <form>
        <input type="text" />  
        <button>search</button>
      </form>  
      <div>
        {
          profile ?  (
            <div>
              <button>
                Login
              </button>
              <button>
                Register
              </button>
            </div>
          ) : (
             <div>
                  <button>
               User profile
            </button>
            <button>
              Cart
            </button>
            <button>
              Orders
            </button>
             </div>
           
          )

        }
      </div>
    </div>
  )
}
