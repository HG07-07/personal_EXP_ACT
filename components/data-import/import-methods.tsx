"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileSpreadsheet,
  FileImage,
  Receipt,
  CreditCard,
  Upload,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export function ImportMethods() {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [receiptImage, setReceiptImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setReceiptImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    // Simulate file upload
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "File uploaded successfully",
      description: `${selectedFile.name} has been processed.`,
    });

    setIsUploading(false);
    setSelectedFile(null);
  };

  const handleReceiptProcess = async () => {
    if (!receiptImage) return;

    setIsUploading(true);

    // Simulate receipt processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Receipt processed successfully",
      description: "The receipt data has been extracted and saved.",
    });

    setIsUploading(false);
    setReceiptImage(null);
  };

  const handleConnectBank = () => {
    // This would typically open a Plaid Link instance
    toast({
      title: "Bank connection initiated",
      description: "Please complete the secure connection process.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Import Your Financial Data</CardTitle>
        <CardDescription>
          Choose a method to import your transactions and financial data
          securely.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Privacy Assured</AlertTitle>
          <AlertDescription>
            Your data never leaves our platform. All processing is done securely
            and any data sent to AI services is anonymized.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="csv">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="csv" className="flex flex-col py-2 h-auto">
              <FileSpreadsheet className="h-4 w-4 mb-1" />
              <span className="text-xs">CSV/Excel</span>
            </TabsTrigger>
            <TabsTrigger value="receipt" className="flex flex-col py-2 h-auto">
              <Receipt className="h-4 w-4 mb-1" />
              <span className="text-xs">Receipt</span>
            </TabsTrigger>
            <TabsTrigger value="manual" className="flex flex-col py-2 h-auto">
              <FileImage className="h-4 w-4 mb-1" />
              <span className="text-xs">Manual</span>
            </TabsTrigger>
            <TabsTrigger value="bank" className="flex flex-col py-2 h-auto">
              <CreditCard className="h-4 w-4 mb-1" />
              <span className="text-xs">Bank</span>
            </TabsTrigger>
          </TabsList>

          {/* CSV/Excel Import */}
          <TabsContent value="csv" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="csv-file">Upload CSV or Excel File</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="csv-file"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                />
                <Button
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
              {selectedFile && (
                <p className="text-sm text-muted-foreground">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Supported formats:</p>
              <ul className="list-disc list-inside pl-2">
                <li>CSV files from most banks and financial institutions</li>
                <li>Excel files (.xlsx, .xls) with transaction data</li>
              </ul>
            </div>
          </TabsContent>

          {/* Receipt Scanning */}
          <TabsContent value="receipt" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="receipt-image">Upload Receipt Image</Label>
              <div className="flex flex-col gap-4">
                <Input
                  id="receipt-image"
                  type="file"
                  accept="image/*"
                  onChange={handleReceiptUpload}
                />
                {receiptImage ? (
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={receiptImage}
                      alt="Receipt preview"
                      className="max-h-64 object-contain border rounded-md"
                    />
                    <Button
                      onClick={handleReceiptProcess}
                      disabled={isUploading}
                    >
                      {isUploading ? "Processing..." : "Process Receipt"}
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-8">
                    <FileImage className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Take a photo or upload an image of your receipt
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Manual Entry */}
          <TabsContent value="manual" className="space-y-4 pt-4">
            <p className="text-sm">Manually enter transaction details:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transaction-date">Date</Label>
                <Input id="transaction-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transaction-amount">Amount</Label>
                <Input
                  id="transaction-amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transaction-merchant">Merchant/Payee</Label>
                <Input
                  id="transaction-merchant"
                  placeholder="Enter merchant name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transaction-category">Category</Label>
                <Input id="transaction-category" placeholder="Enter category" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="transaction-notes">Notes</Label>
                <Input
                  id="transaction-notes"
                  placeholder="Add any additional details"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Add Transaction</Button>
            </div>
          </TabsContent>

          {/* Bank Connection */}
          <TabsContent value="bank" className="space-y-4 pt-4">
            <div className="text-sm text-muted-foreground mb-4">
              <p>
                Connect your bank accounts securely using Plaid to automatically
                import transactions.
              </p>
              <p className="mt-2">
                Your credentials are never stored on our servers and the
                connection is encrypted end-to-end.
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={handleConnectBank} className="w-full md:w-auto">
                <CreditCard className="mr-2 h-4 w-4" />
                Connect Bank Account
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Need help importing your data? Check our{" "}
          <a href="#" className="text-primary hover:underline">
            guide
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary hover:underline">
            contact support
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
