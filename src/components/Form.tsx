import type { SubmitEvent } from "react";

const Form = () => {
  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    // preventDefault behavior whereas submitted normally reloads page without console.log
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
