import { useState } from "react";

const MyForm = ({ handleAdd }) => {
  const input1 = {
    idAttr: "input1",
    typeAttr: "text",
    labelText: "Task: ",
  };

  const input2 = {
    idAttr: "input2",
    labelText: "Category: ",
    options: [
      { value: "Work", text: "Work" },
      { value: "Grocery", text: "Grocery" },
      { value: "Workout", text: "Workout" },
    ],
  };

  const input3 = {
    idAttr: "input3",
    labelText: "Notes: ",
  };

  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState(input2.options[0].value);
  const [input3Value, setInput3Value] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault(); //prevent the page from refresh
    handleAdd({
      task: input1Value,
      category: input2Value,
      notes: input3Value,
    });
  };

  return (
    <div className="my-form">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor={input1.idAttr}>{input1.labelText}</label>
          <input
            type={input1.type}
            id={input1.idAttr}
            value={input1Value}
            required
            onChange={(event) => setInput1Value(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor={input2.idAttr}>{input2.labelText}</label>
          <select
            id={input2.idAttr}
            value={input2Value}
            required
            onChange={(event) => setInput2Value(event.target.value)}
          >
            {input2.options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={input3.idAttr}>{input3.labelText}</label>
          <br />
          <textarea
            id={input3.idAttr}
            cols="30"
            rows="10"
            value={input3Value}
            required
            onChange={(event) => setInput3Value(event.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
