import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"

export default function ProductCard() {
  return (
    <Card className="w-full  lg:max-w-xl rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg bg-white dark:bg-neutral-900 ">
      <img
        src="https://via.placeholder.com/400x250"
        alt="Product image"
        className="w-full h-52 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Product Title</CardTitle>
        <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
          Short product description or tagline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">$29.99</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button>Add to Cart</Button>
        <Button variant="ghost">Details</Button>
      </CardFooter>
    </Card>
  )
}
