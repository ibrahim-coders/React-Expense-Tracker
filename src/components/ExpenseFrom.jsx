
import { useForm } from 'react-hook-form';

export default function ExpenseForm({ onSubmit }) {
  const categories = ['tour', 'utility bill', 'personal bill'];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <>
      <div>
        <h2 className="text-3xl py-4 font-semibold text-sky-600 text-center">
          Add Expense
        </h2>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 max-w-[500px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered input-primary w-full max-w-lg mb-4"
          {...register('description', {
            required: true,
            minLength: 5,
            maxLength: 50,
          })}
        />
        {errors.description?.type === 'required' && (
          <span className="text-rose-500">This field is required</span>
        )}
        {errors.description?.type === 'minLength' && (
          <span className="text-red-500">
            Text is too short! The description should be at least 5 characters.
          </span>
        )}
        {errors.description?.type === 'maxLength' && (
          <span className="text-red-500">
            Text is too long! The description should be no more than 50
            characters.
          </span>
        )}

        <input
          type="number"
          placeholder="Amount"
          className="input input-bordered input-primary w-full max-w-lg mb-4"
          {...register('amount', { required: true })}
        />
        {errors.amount && (
          <span className="text-rose-500">This field is required</span>
        )}

        <h2 className="text-xl font-semibold text-sky-600">Choose Category</h2>
        <select
          className="select select-bordered w-full max-w-lg text-center mb-4 select-primary"
          {...register('category', { required: true })}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-rose-500">This field is required</span>
        )}

        <input
          type="submit"
          value="Add Expense"
          className="btn btn-secondary w-full"
        />
      </form>
    </>
  );
}
