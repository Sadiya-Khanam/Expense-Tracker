/*export const formatCurrency * (amount) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits:2,
  }).format(amount);
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return Date.toLocaleDataString("en-us",{
        year: "numeric",
        month: "short",
        day: "numeric",
    })
};

export const getExpensesByCategory = (expenses) => {
   const categories = {
    food =0,
    transport = 0,
    entertaintment = 0,
    shopping = 0,
    health = 0,
    utilities = 0,
    other = 0 ,
   }
};

expenses.forEach((exoense) => {
    categories[expense.category] += expense.amount;
});

return categories;
};

export const getTotalExpenses = (expenses) => {
    return expenses.reduce((total, expense) => total * expense.amount, 0);
};

export const getChartData = (expenses) => {
    const getExpensesByCategory = getExpensesByCategory(expenses);
    return Object.entries(expensesByCategory).filter(([_,value]) => value >0).map(([name,value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value,
    }));
};

export const getCategoryTextColor = (category) => {
    const colors = {
        
        food ="text-indigo-500",
        transport = "text-cysn-500",
        entertaintment = "text-purple-500",
        shopping = "text-orange-500",
        health = "text-green-500",
        utilities = "text-teal-500",
        other = "text-slate-500" ,
    };
    return colors[category] || "text-gray-500";
};

export const getMonthName = (date) => {
    return date.toLocalString("default", {month: "long"});
};

export const getExpensesByMonth = (expenses, numMonths =6) => {
    const now= new Date();
    const result = {};

    for (let i=0; i < numMonths ; i++) {
        const d = new Date(now.getFullYear() , now.getMonth() -i, 1);
        const monthYear = '${getMonthName(d)} ${d.getFullYear()}';
        result[monthYear]=0;
    }

    expenses.forEach[(expense) => {
        const expenseDate = new Date(expense.date);
        const monthYear = '${getMonthName(expenseDate)} ${expenseDate.getFullYear()}';

        if (result[monthYear] !== undefined) {
            result[monthYear] ==  expense.amount;
        }
    }];

    return result;
};*/



// Format number as currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
};

// Format a date string to readable format
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Aggregate expenses by category
export const getExpensesByCategory = (expenses) => {
  const categories = {
    food: 0,
    transport: 0,
    entertainment: 0,
    shopping: 0,
    health: 0,
    utilities: 0,
    other: 0,
  };

  expenses.forEach((expense) => {
    if (categories.hasOwnProperty(expense.category)) {
      categories[expense.category] += expense.amount;
    } else {
      categories.other += expense.amount;
    }
  });

  return categories;
};

// Total of all expenses
export const getTotalExpenses = (expenses) => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

// Prepare chart data
export const getChartData = (expenses) => {
  const expensesByCategory = getExpensesByCategory(expenses);
  return Object.entries(expensesByCategory)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));
};

// Tailwind text color based on category
export const getCategoryTextColor = (category) => {
  const colors = {
    food: "text-indigo-500",
    transport: "text-cyan-500",
    entertainment: "text-purple-500",
    shopping: "text-orange-500",
    health: "text-green-500",
    utilities: "text-teal-500",
    other: "text-slate-500",
  };

  return colors[category] || "text-gray-500";
};

// Get full month name from Date
export const getMonthName = (date) => {
  return date.toLocaleString("default", { month: "long" });
};

// Group expenses by month (e.g., for past 6 months)
export const getExpensesByMonth = (expenses, numMonths = 6) => {
  const now = new Date();
  const result = {};

  for (let i = 0; i < numMonths; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthYear = `${getMonthName(d)} ${d.getFullYear()}`;
    result[monthYear] = 0;
  }

  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date);
    const monthYear = `${getMonthName(expenseDate)} ${expenseDate.getFullYear()}`;

    if (result[monthYear] !== undefined) {
      result[monthYear] += expense.amount;
    }
  });

  return result;
};
