import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/data-table";
import { transactionscolumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({});
  return (
    <div>
      {/*TITULO E BOTÃO */}
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionscolumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
