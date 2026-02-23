import type { FormEvent } from "react";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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
