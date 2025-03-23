import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, CreditCard, Trash } from "lucide-react"

export default function PaymentMethodsPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Payment Methods</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      </div>
      <p className="text-muted-foreground">Manage your payment methods and accounts</p>

      <div className="grid gap-6 mt-6">
        <h2 className="text-xl font-semibold">Credit & Debit Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Visa ending in 4242
              </CardTitle>
              <CardDescription>Personal • Expires 04/25</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Default payment method</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Remove
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Mastercard ending in 5678
              </CardTitle>
              <CardDescription>Business • Expires 08/26</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Used for business expenses</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Remove
              </Button>
            </CardFooter>
          </Card>

          {/* Add New Card */}
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-[200px]">
              <PlusCircle className="h-8 w-8 mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Add a new payment method</p>
              <Button variant="outline" className="mt-4">
                Add Card
              </Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mt-8">Bank Accounts</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Bank Account 1 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Chase Bank
              </CardTitle>
              <CardDescription>Checking • ****1234</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Primary account</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Remove
              </Button>
            </CardFooter>
          </Card>

          {/* Add New Bank Account */}
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-[200px]">
              <PlusCircle className="h-8 w-8 mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Add a new bank account</p>
              <Button variant="outline" className="mt-4">
                Add Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

