import Header from '@/components/header'
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

// Gradient add later
// bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900

import { Loan as T_Loan } from '@/types/loan'
import { columns } from './columns'
import { DataTable } from './data-table'
import { ReactElement, useEffect, useState } from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'

async function getData(): Promise<T_Loan[]> {
  // console.log('bbbbbbbbbbbbb')
  // console.log(
  //   window.api.loans.insertLoan({
  //     loan_number: 121213232,
  //     name: 'xxxabababababbaxxxxgg',
  //     date: 'xxxxx',
  //     address: null,
  //     mobile_number: null,
  //     savings_account_number: 3344,
  //     total_outstanding: undefined,
  //     total_disbursed: undefined,
  //     due_amount: undefined,
  //     loan_type: 'sssss',
  //     product_type: 222
  //   })
  // )
  // console.log(window.api.loans.insertLoan(2))

  const loans = window.api.loans.getAllLoans()
  console.log(loans)

  return loans
  // Fetch data from your API here.
  return [
    {
      loan_number: 1111111,
      date: 'aaaaaa',
      name: null,
      address: 'bbbbbbb',
      mobile_number: 121222,
      savings_account_number: 111111,
      total_outstanding: undefined,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 222222,
      date: 'aaaaaa',
      name: 'bbbbbbbbbbb',
      address: 'bbbbbbb',
      mobile_number: 121222,
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      mobile_number: 121222,
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      mobile_number: 121222,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      mobile_number: 121222,
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      mobile_number: 121222,
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      mobile_number: 121222,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222,
      mobile_number: 121222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      mobile_number: 121222,
      loan_type: 'aaaaaa',
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      mobile_number: 121222,
      product_type: 2222222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      product_type: 2222222,
      mobile_number: 121222
    },
    {
      loan_number: 333333,
      date: 'aaaaaa',
      name: 'ccccccc',
      address: 'bbbbbbb',
      savings_account_number: 111111,
      total_outstanding: 111111,
      total_disbursed: 111111,
      due_amount: 111111,
      loan_type: 'aaaaaa',
      mobile_number: 121222,
      product_type: 2222222
    }
  ]
}

const Loan = (): ReactElement => {
  const [data, setData] = useState<T_Loan[] | null>(null)
  // const data = await getData()

  useEffect(() => {
    getData().then((response) => setData(response))
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Header PathNode={<PathNode />} />

      <div className="flex-grow px-4 pb-4 pt-2">
        <Card className="w-full h-full p-6">
          {data ? (
            <div className="h-full w-full">
              <DataTable columns={columns} data={data} />
            </div>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

const PathNode = (): ReactElement => {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>Loans</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Loan
