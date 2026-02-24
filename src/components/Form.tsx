import { useForm, type FieldValues } from "react-hook-form";
// zod is used for validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }),
});

// helps to make better custom validation logic
type formData = z.infer<typeof schema>;

// defines shape of form
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // destructure formState property
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // FormData shapes form with checks
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // FieldValues comes from hovering over handleSubmit((data))
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    // preventDefault behavior whereas submitted normally reloads page without console.log
    // handleSubmit function recieves data in form. after form submitted call form submission
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // all validation rules defined in schema
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* ? is used because name can be empty */}
        {/* ? and . is optional chaining in javascript */}
        {/* Accessing errors object for error message if submitted incorrectly */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // Gets rid of onChange function and all that code. register makes it shorter and easier to use
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.age?.message}</p>}
      </div>
      {/* disabled disables button unless valid */}
      <button disabled={!isValid} className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
