# Expense Tracker

The React Expense Tracker is a simple yet effective web application designed to help users manage and visualize their daily, weekly, or monthly expenses. Built with React.js, it offers a clean interface to add, track, filter, and delete expenses, providing insights into spending habits through interactive charts. All data is persistently stored in the browser's local storage, ensuring your expenses are saved even after closing the tab.

This project was built to demonstrate proficiency in:
* React fundamentals (components, props, state, hooks)
* Context API for global state management
* Data manipulation and aggregation
* Data visualization with charting libraries
* Responsive UI design using Tailwind CSS
* Client-side data persistence.

## Features

* **Add Expenses:** Easily add new expenses with a description, amount, category (Food & Dining, Transportation, Entertainment, Shopping, Utilities, Health, Other), and date.
* **Expense History List:** View a chronological list of all your recorded expenses.
* **Category Filtering:** Filter expenses by specific categories or view all expenses at once.
* **Sorting:** Expenses are automatically sorted by date (most recent first).
* **Delete Expenses:** Remove individual expenses from your history.
* **Expense Analytics:**
    * **Pie Chart:** Visual breakdown of spending across different categories.
    * **Bar Chart:** Monthly spending overview for the past 6 months.
* **Expense Summary:** Quick overview of total expenses, highest spending category, and total number of entries.
* **Persistent Data:** All expense data is saved in local storage, so it persists even after closing the browser.
* **Responsive Design:** User-friendly interface that adapts to various screen sizes (desktop, tablet, mobile).
* **Toasts Notifications:** Provides user feedback for actions like adding or deleting expenses.





## Technologies Used

* **React.js:** Frontend JavaScript library for building user interfaces.
* **React Context API:** For efficient state management across components.
* **Recharts:** A composable charting library built with React and D3.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Lucide React:** Beautiful, handcrafted open-source icons.
* **React Hot Toast:** For simple, responsive, and customizable toast notifications.



## Usage

1.  **Adding an Expense:**
    * Fill in the "Description", "Amount", "Category", and "Date" fields in the "Add New Expense" section.
    * Click "Add Expense". A success toast will appear.

2.  **Viewing Expenses:**
    * Expenses will automatically appear in the "Expense History" table below the form.
    * Use the category dropdown in the "Expense History" section to filter expenses by category or select "All" to view everything.

3.  **Deleting an Expense:**
    * Click the trash icon next to any expense in the history list to delete it.

4.  **Viewing Analytics:**
    * Switch between "Pie Chart" and "Bar Chart" tabs in the "Expense Analytics" section to visualize your spending by category or month.

## Folder Structure

expense-tracker/
├── public/                 # Public assets (e.g., index.html)
├── src/
│   ├── assets/             # Static assets like images (if any)
│   ├── components/         # Reusable UI components
│   │   ├── ExpenseBarChart.jsx
│   │   ├── ExpenseChart.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── ExpensePieChart.jsx
│   ├── context/            # React Context for global state management
│   │   └── ExpenseContext.jsx
│   ├── utils/              # Utility functions (e.g., formatting, data aggregation)
│   │   └── expenses.js
│   ├── App.css             # Main styling
│   ├── App.js              # Main application component
│   ├── index.css           # Global CSS (Tailwind imports)
│   └── index.js            # Entry point for React app
├── .gitignore              # Files/folders ignored by Git
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation


