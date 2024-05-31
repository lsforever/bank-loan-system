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
import { ReactElement } from 'react'

const formSchema = z.object({
  loan_number: z.string().min(2, {
    message: 'Loan Number must be at least 2 characters.'
  }),
  name: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.'
    })
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

const AddLoans = (): ReactElement => {
  // Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // loan_number: '',
      // name: '',
      // address: '',
      // mobile_number: 0,
      // savings_account_number: 0,
      // total_outstanding: 0,
      // total_disbursed: 0,
      // due_amount: 0,
      // loan_type: '',
      // product_type: 0
    }
  })

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>): void {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

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
                        name="loan_number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Loan Number</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" placeholder="loan no" {...field} />
                            </FormControl>
                            <FormDescription>Loan number or loan ID.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="name"
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
                        name="address"
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
                        name="mobile_number"
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
                        name="savings_account_number"
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
                        name="total_outstanding"
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
                        name="total_disbursed"
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
                        name="due_amount"
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
                        name="product_type"
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
                        name="loan_type"
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

                  {/* <TabsContent value="g1">
                    <div className="flex flex-col gap-4">
                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                              <Input placeholder="account no" {...field} />
                            </FormControl>
                            <FormDescription>Account number of the guarantee.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
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
                        name="g1_name"
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
                        name="g1_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Income</FormLabel>
                            <FormControl>
                              <Input placeholder="income" {...field} />
                            </FormControl>
                            <FormDescription>Income of the guarantee.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
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

                  <TabsContent value="g2">
                    <div className="flex flex-col gap-4">
                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                              <Input placeholder="account no" {...field} />
                            </FormControl>
                            <FormDescription>Account number of the guarantee.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
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
                        name="g1_name"
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
                        name="g1_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Income</FormLabel>
                            <FormControl>
                              <Input placeholder="income" {...field} />
                            </FormControl>
                            <FormDescription>Income of the guarantee.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="g1_name"
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
                        name="g1_name"
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
                  </TabsContent> */}
                </Tabs>

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
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
