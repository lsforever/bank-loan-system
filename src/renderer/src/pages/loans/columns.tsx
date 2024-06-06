import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'

import { Loan } from '@/types/loan'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Trash2, MoreHorizontal, Clipboard, Pencil, Eye } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/column-header'
import { ReactElement } from 'react'

export const columns: ColumnDef<Loan>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'loan_number',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Loan No" />
  },
  // {
  //   accessorKey: 'date',
  //   header: 'Date'
  // },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }): ReactElement => {
      const dateString: string | undefined = row.getValue('date')
      return <div>{dateString ? new Date(dateString).toLocaleDateString('en-GB') : 'n/a'}</div>
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('name') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'address',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('address') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'mobile_number',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mobile Number" />,
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('mobile_number') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'savings_account_number',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Savings Acc No" />,
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('savings_account_number') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'loan_type',
    header: 'Loan Type',
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('loan_type') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'product_type',
    header: 'Product Type',
    cell: ({ row }): ReactElement => {
      return <div>{row.getValue('product_type') || 'n/a'}</div>
    }
  },
  {
    accessorKey: 'total_outstanding',
    header: () => <div className="text-right">Outstanding</div>,
    cell: ({ row }): ReactElement => {
      const value = row.getValue('total_outstanding')
      return (
        <div className="text-right">
          {value
            ? new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'LKR'
              }).format(Number(value) / 100)
            : 'n/a'}
        </div>
      )
    }
  },

  {
    accessorKey: 'total_disbursed',
    header: () => <div className="text-right">Disbursed</div>,
    cell: ({ row }): ReactElement => {
      const value = row.getValue('total_disbursed')
      return (
        <div className="text-right">
          {value
            ? new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'LKR'
              }).format(Number(value) / 100)
            : 'n/a'}
        </div>
      )
    }
  },
  {
    accessorKey: 'due_amount',
    header: () => <div className="text-right">Due Amount</div>,
    cell: ({ row }): ReactElement => {
      const value = row.getValue('due_amount')
      return (
        <div className="text-right">
          {value
            ? new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'LKR'
              }).format(Number(value) / 100)
            : 'n/a'}
        </div>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }): ReactElement => {
      const loan = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              View
              <DropdownMenuShortcut>
                <Eye className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit
              <DropdownMenuShortcut>
                <Pencil className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>
                <Trash2 className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(loan.loan_number.toString())}
            >
              Copy ID
              <DropdownMenuShortcut>
                <Clipboard className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
