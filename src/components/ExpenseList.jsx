import ExpenseFilter from "./ExpenseFilter";

export default function ExpenseList({ expenses, onDelete }) {
  const totalExpense = expenses.reduce((previous, expense) => {
    return previous + expense.amount;
  }, 0);

  return (
    <>
      <div className="overflow-x-auto max-w-[800px] m-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-primary">
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* show expenses */}
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No expense found!
                </td>
              </tr>
            ) : (
              expenses.map(expense => (
                <tr key={expense.id} className="border-b-2 border-sky-200">
                  <th>{expense.id}</th>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => onDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className="text-xl text-primary">Total</td>
              <td>
                ${expenses.reduce((prev, current) => prev + parseInt(current.amount), 0)}
              </td>

              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
