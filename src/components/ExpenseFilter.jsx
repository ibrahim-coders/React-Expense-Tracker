
export default function ExpenseFilter({ onSelectedCategory }) {
  const categories = ['All', 'tour', 'utility bill', 'personal bill'];

  return (
    <div className="mx-auto text-center max-w-[500px] my-6">
      <select
        className="select select-bordered w-full max-w-[400px]text-center mb-4"
        onChange={e => onSelectedCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
