import type { FormEvent } from "react";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

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
    formState: { errors },
    // FormData shapes form with checks
  } = useForm<FormData>();

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
          // data validation will not submit
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* ? is used because name can be empty */}
        {/* ? and . is optional chaining in javascript */}
        {/* Accessing errors object for error message if submitted incorrectly */}
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // Gets rid of onChange function and all that code. register makes it shorter and easier to use
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
