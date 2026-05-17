import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";

const accounts = [
  { name: "Checking", balance: "$4,280.42", change: "+$320 this month" },
  { name: "Savings", balance: "$12,940.00", change: "+$800 this month" },
  { name: "Credit Card", balance: "-$1,248.19", change: "$420 due soon" },
];

const transactions = [
  { name: "Paycheck", category: "Income", amount: "+$3,250.00" },
  { name: "Rent", category: "Housing", amount: "-$1,450.00" },
  { name: "Groceries", category: "Food", amount: "-$86.32" },
  { name: "Spotify", category: "Subscriptions", amount: "-$10.99" },
];

export default define.page(function Home({ route, info }) {
  return (
    <div class="min-h-screen bg-gray-950 text-gray-100">
      <Head>
        <title>Money Dashboard</title>
      </Head>

      <main class="mx-auto max-w-6xl px-4 py-8">
        <header class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-emerald-400">Dashboard</p>
            <h1 class="text-3xl font-bold tracking-tight">
              Your Money {route || "No route found"}
            </h1>
            <p class="mt-1 text-gray-400">
              Track balances, spending, income, and goals in one place.{" "}
              {JSON.stringify(info) || "No page info"}
            </p>
          </div>

          <button
            type="button"
            class="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-gray-950 hover:bg-emerald-400"
          >
            Add Transaction
          </button>
        </header>

        <section class="mb-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p class="text-sm text-gray-400">Net Worth</p>
            <p class="mt-2 text-3xl font-bold">$15,972.23</p>
            <p class="mt-2 text-sm text-emerald-400">+$1,120 this month</p>
          </div>

          <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p class="text-sm text-gray-400">Monthly Spending</p>
            <p class="mt-2 text-3xl font-bold">$2,184.66</p>
            <p class="mt-2 text-sm text-yellow-400">72% of budget used</p>
          </div>

          <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <p class="text-sm text-gray-400">Upcoming Bills</p>
            <p class="mt-2 text-3xl font-bold">$620.00</p>
            <p class="mt-2 text-sm text-gray-400">Next 7 days</p>
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
            <div class="mb-4 flex items-center justify-between">
              <h2 class="text-xl font-semibold">Recent Transactions</h2>
              <a
                href="#"
                class="text-sm text-emerald-400 hover:text-emerald-300"
              >
                View all
              </a>
            </div>

            <div class="divide-y divide-gray-800">
              {transactions.map((transaction) => (
                <div class="flex items-center justify-between py-4">
                  <div>
                    <p class="font-medium">{transaction.name}</p>
                    <p class="text-sm text-gray-400">{transaction.category}</p>
                  </div>
                  <p
                    class={`font-semibold ${
                      transaction.amount.startsWith("+")
                        ? "text-emerald-400"
                        : "text-gray-200"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside class="space-y-6">
            <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
              <h2 class="mb-4 text-xl font-semibold">Accounts</h2>

              <div class="space-y-4">
                {accounts.map((account) => (
                  <div class="rounded-xl bg-gray-950 p-4">
                    <div class="flex items-center justify-between">
                      <p class="font-medium">{account.name}</p>
                      <p class="font-semibold">{account.balance}</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-400">{account.change}</p>
                  </div>
                ))}
              </div>
            </div>

            <div class="rounded-2xl border border-gray-800 bg-gray-900 p-5">
              <h2 class="text-xl font-semibold">Savings Goal</h2>
              <p class="mt-1 text-sm text-gray-400">Emergency Fund</p>

              <div class="mt-4 h-3 rounded-full bg-gray-800">
                <div class="h-3 w-[68%] rounded-full bg-emerald-500"></div>
              </div>

              <div class="mt-3 flex justify-between text-sm text-gray-400">
                <span>$6,800 saved</span>
                <span>$10,000 goal</span>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
});
