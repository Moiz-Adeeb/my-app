import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <div className="container my-3 text-center">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="htmlForm-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="htmlForm-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="htmlForm-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="htmlForm-control"
              id="desc"
            />
          </div>
          <button type="submit" className="btn btn-success btn-sm">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};
