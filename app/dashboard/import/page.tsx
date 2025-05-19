import { ImportMethods } from "@/components/data-import/import-methods";

export default function ImportPage() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Import Data</h1>
      </div>
      <p className="text-muted-foreground">
        Choose a method to import your financial data securely.
      </p>
      <div className="mt-4">
        <ImportMethods />
      </div>
    </div>
  );
}
