import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"

export function PaginationComp() {
  return (
    <Pagination>
      <PaginationContent className="flex justify-center items-center gap-1 text-sm">
        <PaginationItem>
          <PaginationPrevious  size = "icon" href="#" className="px-3 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-800" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink size = "icon"  href="#" className="px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800">
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink size = "icon"  href="#" isActive className="px-3 py-1 font-semibold bg-neutral-300 dark:bg-neutral-700 rounded">
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink size = "icon"  href="#" className="px-3 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800">
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext size = "icon"  href="#" className="px-3 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-800" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
