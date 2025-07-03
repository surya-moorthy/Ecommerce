import { useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard"
import { Button } from "./ui/button"

export default function Landing() {
  const navigation = useNavigate();
  return (
    <div className="px-4">
      
      {/* ✅ Hero Section */}
      <section
        className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center space-y-6 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl lg:text-6xl font-bold font-serif">
          Cravings to Usage
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
          Buy whatever you want — but don’t forget to pay the paisa first.
        </p>
        <div className="space-x-5">
              <Button size="lg">
                Buy Now
              </Button>
              <Button size="lg" onClick={()=>navigation("/register")}>
                Get started
              </Button>
        </div>
      </section>

      {/* ✅ Product Grid */}
      <section className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
