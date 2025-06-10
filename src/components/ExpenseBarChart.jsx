import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from "recharts";
import { formatCurrency } from "../utils/expenses";
import { useExpenses } from "../context/ExpenseContext"; // <- Import context

const ExpenseBarChart = () => {
  const { expenses } = useExpenses(); // <- Get all expenses

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Step 1: Aggregate totals by month
  const monthlyTotals = Array(12).fill(0);

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    const monthIndex = date.getMonth();
    monthlyTotals[monthIndex] += expense.amount;
  });

  // Step 2: Prepare chart data
  const chartData = months.map((month, index) => ({
    name: month,
    amount: monthlyTotals[index],
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-md shadow-md border border-gray-100">
          <p className="font-medium">{label}</p>
          <p className="text-lg">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full overflow-x-auto">
      <div style={{ minWidth: "700px", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10 }}
              interval={0}
            />
            <YAxis
              tickFormatter={(value) => `₹${value}`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="amount"
              radius={[4, 4, 0, 0]}
              animationDuration={750}
              minPointSize={5}
              fill="#9b87f5"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.amount === 0 ? "#d1d5db" : "#9b87f5"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseBarChart;
