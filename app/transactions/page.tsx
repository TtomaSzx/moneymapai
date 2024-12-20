import { db } from "../_lib/prisma";
import { DataTable } from "../_components/data-table";
import { transactionscolumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/*TITULO E BOTÃO */}
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionscolumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
