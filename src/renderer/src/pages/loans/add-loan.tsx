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
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { ReactElement } from 'react'

const formSchema = z.object({
  loan_no: z.string().min(2, {
    message: 'Loan Number must be at least 2 characters.'
  }),
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
})

const AddLoans = (): ReactElement => {
  // Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loan_no: '',
      name: ''
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
      <Header />
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
                        name="loan_no"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Loan Number</FormLabel>
                            <FormControl>
                              <Input placeholder="loan no" {...field} />
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
                        name="savings_acc_no"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Savings Account Number</FormLabel>
                            <FormControl>
                              <Input placeholder="savings account number" {...field} />
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
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input placeholder="mobile number" {...field} />
                            </FormControl>
                            <FormDescription>Mobile Number of the borrower.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="outstanding"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Principle Outstanding</FormLabel>
                            <FormControl>
                              <Input placeholder="outstanding amount" {...field} />
                            </FormControl>
                            <FormDescription>Principle Outstanding amount.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="disbursed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Total Amount Disbursed</FormLabel>
                            <FormControl>
                              <Input placeholder="disbursed amount" {...field} />
                            </FormControl>
                            <FormDescription>Total Amount Disbursed.</FormDescription>
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
                              <Input placeholder="product type" {...field} />
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

                      <FormField
                        control={form.control}
                        name="due"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Due Amount</FormLabel>
                            <FormControl>
                              <Input placeholder="due amount" {...field} />
                            </FormControl>
                            <FormDescription>Total amount due.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="g1">
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
                  </TabsContent>
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

export default AddLoans
