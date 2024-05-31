'use client'

// import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

// import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '@/components/data-table-view-options'
import { Button } from '@/components/ui/button'
import { ListFilter, PlusCircle, File } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// import { priorities, statuses } from '../data/data'
// import { DataTableFacetedFilter } from './data-table-faceted-filter'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  //const isFiltered = table.getState().columnFilters.length > 0
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter loans..."
          value={(table.getColumn('loan_number')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('loan_number')?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1"
          onClick={() => navigate('/loans/view')}
        >
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
        </Button>
        <DataTableViewOptions table={table} />
        <Button size="sm" className="h-8 gap-1" onClick={() => navigate('/loans/add')}>
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Loan</span>
        </Button>
      </div>
    </div>
  )
}
