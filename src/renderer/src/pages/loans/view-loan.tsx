import Header from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ViewLoan = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex grow p-4">
        <Card className="h-full w-full">
          <CardHeader>
            <CardTitle>View Loan</CardTitle>
            <CardDescription>Details for ID 82524567</CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="loan">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="loan">Loan Data</TabsTrigger>
                  <TabsTrigger value="g1">Guarantee 1</TabsTrigger>
                  <TabsTrigger value="g2">Guarantee 2</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="loan" className="flex flex-col gap-4 pt-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Loan No</h4>
                  <p className="text-sm text-muted-foreground">82524567</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Borrower Name</h4>
                  <p className="text-sm text-muted-foreground">A. Kamal Perera</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Savings Account Number</h4>
                  <p className="text-sm text-muted-foreground">1727765382</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Address</h4>
                  <p className="text-sm text-muted-foreground">No.402, Araliya Rd, Mathara.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Mobile Number</h4>
                  <p className="text-sm text-muted-foreground">0776352263</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Principle Outstanding</h4>
                  <p className="text-sm text-muted-foreground">Rs.50254.00</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Total Amount Disbursed</h4>
                  <p className="text-sm text-muted-foreground">Rs.20244.00</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Due Amount</h4>
                  <p className="text-sm text-muted-foreground">Rs.10164.00</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Product Type</h4>
                  <p className="text-sm text-muted-foreground">24</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Loan Type</h4>
                  <p className="text-sm text-muted-foreground">personal</p>
                </div>
              </TabsContent>

              <TabsContent value="g1" className="flex flex-col gap-4 pt-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Name</h4>
                  <p className="text-sm text-muted-foreground">B. Nimal Gunasinghe</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Account Number</h4>
                  <p className="text-sm text-muted-foreground">1425675386</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Address</h4>
                  <p className="text-sm text-muted-foreground">No.202, Deweta Rd, Mathara.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">NIC no</h4>
                  <p className="text-sm text-muted-foreground">769729545V</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Mobile Number</h4>
                  <p className="text-sm text-muted-foreground">0774652283</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Income</h4>
                  <p className="text-sm text-muted-foreground">Rs.320164.00</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Occupation</h4>
                  <p className="text-sm text-muted-foreground">Business</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Working Place</h4>
                  <p className="text-sm text-muted-foreground">Nimal Shopping Complex, Matara</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ViewLoan
