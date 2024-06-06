import Header from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { ReactElement, ReactNode, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Loan as loanT, Guarantee as GuaranteeT } from '@/types/loan'
import { useNavigate } from 'react-router-dom'

const loanSchema = z.object({
  loan_number: z.coerce
    .number({
      message: 'Loan Number must be valid.'
    })
    .int({
      message: 'Loan Number must be valid.'
    })
    .nonnegative({
      message: 'Loan Number must be valid.'
    }),
  name: z
    .string()
    // .min(2, {
    //   message: 'Name must be at least 2 characters.'
    // })
    .optional(),
  address: z.string().optional(),
  mobile_number: z.coerce.number().min(0).optional(),
  savings_account_number: z.coerce.number().min(0).optional(),
  total_outstanding: z.coerce.number().optional(),
  total_disbursed: z.coerce.number().optional(),
  due_amount: z.coerce.number().optional(),
  loan_type: z.string().optional(),
  product_type: z.coerce.number().optional()
})

const guaranteeSchema = z.object({
  loan_number: z.coerce.number(),
  guarantee_number: z.coerce.number().min(1).max(2),
  name: z.string().optional(),
  address: z.string().optional(),
  nic: z.string().optional(),
  mobile_number: z.coerce.number().optional(),
  account_number: z.coerce.number().optional(),
  income: z.coerce.number().optional(),
  occupation: z.string().optional(),
  working_place: z.string().optional()
})

const formSchema = z.object({
  loan: loanSchema,
  g1: guaranteeSchema,
  g2: guaranteeSchema
})

const AddLoans = (): ReactElement => {
  // Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loan: {
        loan_number: undefined,
        name: undefined,
        address: undefined,
        mobile_number: undefined,
        savings_account_number: undefined,
        total_outstanding: undefined,
        total_disbursed: undefined,
        due_amount: undefined,
        loan_type: undefined,
        product_type: undefined
      },
      g1: {
        guarantee_number: 1,
        loan_number: undefined,
        name: undefined,
        address: undefined,
        nic: undefined,
        mobile_number: undefined,
        account_number: undefined,
        income: undefined,
        occupation: undefined,
        working_place: undefined
      },
      g2: {
        guarantee_number: 2,
        loan_number: undefined,
        name: undefined,
        address: undefined,
        nic: undefined,
        mobile_number: undefined,
        account_number: undefined,
        income: undefined,
        occupation: undefined,
        working_place: undefined
      }
    }
  })

  // const { register, handleSubmit, formState, watch, setValue } = form
  //const { setValue, watch } = form
  const loan_number = form.watch('loan.loan_number')
  if (form.formState.isDirty && loan_number) {
    form.setValue('g1.loan_number', loan_number)
    form.setValue('g2.loan_number', loan_number)
  }

  const [isOnSubmit, setIsOnSubmit] = useState(false)

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>): void {
    // Do Functionality with the form values.
    // ✅ This will be type-safe and validated.
    // console.log('values ->')
    // console.log(values)

    if (!values.loan?.loan_number) {
      toast('Empty data', {
        description: 'Please enter loan number'
      })
      return
    }

    setIsOnSubmit(true)
    try {
      window.api.loans.insertLoanWithGuarantees(
        {
          ...values.loan,
          date: new Date().toISOString()
        } as loanT,
        values.g1 as GuaranteeT,
        values.g2 as GuaranteeT
      )

      // toast('Success', {
      //   // description: 'Sunday, December 03, 2023 at 9:00 AM',
      //   description: `Loan with ID ${values.loan.loan_number} added succesffuly`
      // })
      // form.reset()
      toast.success(`Loan ${values.loan.loan_number} has been created succesffuly`)
    } catch (e) {
      const msg = (e as Error).message
      if (msg.includes('UNIQUE constraint failed')) {
        toast.warning('This loan already exists. Update it')
      } else {
        toast.error(msg)
      }
    }
    setIsOnSubmit(false)
  }

  const guaranteeList: ('g1' | 'g2')[] = ['g1', 'g2']

  return (
    <div className="flex flex-col h-screen">
      <Header PathNode={<PathNode />} />
      <div className="flex grow p-4">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTitle>Add Loan</CardTitle>
            <CardDescription>Enter loan data below.</CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Tabs defaultValue="loan">
                  <div className="flex items-center">
                    <TabsList>
                      <TabsTrigger value="loan">Loan Data</TabsTrigger>
                      <TabsTrigger value="g1">Guarantee 1</TabsTrigger>
                      <TabsTrigger value="g2">Guarantee 2</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="loan">
                    <div className="flex flex-col gap-4">
                      <FormField
                        control={form.control}
                        name="loan.loan_number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Loan Number</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="loan no" {...field} />
                            </FormControl>
                            <FormDescription>Loan number or loan ID.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="borrower name" {...field} />
                            </FormControl>
                            <FormDescription>Short name of the borrower.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Textarea placeholder="borrower address" {...field} />
                            </FormControl>
                            <FormDescription>Address of the borrower.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.mobile_number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" placeholder="mobile number" {...field} />
                            </FormControl>
                            <FormDescription>Mobile Number of the borrower.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.savings_account_number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Savings Account Number</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min="0"
                                placeholder="savings account number"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Savings Account Number of the borrower.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.total_outstanding"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Principle Outstanding</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="outstanding amount" {...field} />
                            </FormControl>
                            <FormDescription>Total Principle Outstanding amount.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.total_disbursed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Total Amount Disbursed</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="disbursed amount" {...field} />
                            </FormControl>
                            <FormDescription>Total Amount Disbursed.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.due_amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Due Amount</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="due amount" {...field} />
                            </FormControl>
                            <FormDescription>Total amount due.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.product_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Type</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="product type" {...field} />
                            </FormControl>
                            <FormDescription>Enter the number of the product type.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="loan.loan_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Loan Type</FormLabel>
                            <FormControl>
                              <Input placeholder="loan type" {...field} />
                            </FormControl>
                            <FormDescription>Enter the type of the loan.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>

                  {guaranteeList.map((item) => {
                    return (
                      <TabsContent value={item} key={item}>
                        <div className="flex flex-col gap-4">
                          <FormField
                            control={form.control}
                            name={`${item}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Guarantee Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormDescription>name.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`${item}.address`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Guarantee Address</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="address" {...field} />
                                </FormControl>
                                <FormDescription>Address.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.account_number`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                  <Input type="number" placeholder="account no" {...field} />
                                </FormControl>
                                <FormDescription>Account number of the guarantee.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.nic`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>National Identity Card Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="NIC no" {...field} />
                                </FormControl>
                                <FormDescription>Nic no of the guarantee.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.mobile_number`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mobile Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="mobile no" {...field} />
                                </FormControl>
                                <FormDescription>Mobile phone number.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.income`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Income</FormLabel>
                                <FormControl>
                                  <Input type="number" placeholder="income" {...field} />
                                </FormControl>
                                <FormDescription>Income of the guarantee.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.occupation`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Occupation</FormLabel>
                                <FormControl>
                                  <Input placeholder="occupation" {...field} />
                                </FormControl>
                                <FormDescription>Occupation of the guarantee.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`${item}.working_place`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Working Place</FormLabel>
                                <FormControl>
                                  <Input placeholder="working place" {...field} />
                                </FormControl>
                                <FormDescription>Working place of the guarantee.</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TabsContent>
                    )
                  })}
                </Tabs>

                <Button variant={isOnSubmit ? 'secondary' : 'default'} type="submit">
                  {isOnSubmit ? (
                    <>
                      <div className="mr-2 text-primary">Adding</div>
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const PathNode = (): ReactNode => {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/loans">Loans</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Add Loan</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AddLoans
