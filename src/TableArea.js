import { Link } from "react-router-dom";

const TableArea = ({ entries, handleDelete }) => {
  const heads = ["Description", "Category", "Operate"];
  let selected = [];

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      selected.push(id);
    } else {
      selected.filter((item) => item !== id);
    }
  };

  return (
    <div className="my-table">
      <button onClick={() => handleDelete(selected)}>Delete selected</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" disabled />
            </th>
            {heads.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  onClick={(e) => handleCheckboxChange(e, item.id)}
                />
              </td>
              <td>
                <Link to={`/home/${item.id}`}>{item.description}</Link>
              </td>
              <td>{item.category}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => {
                    handleDelete([item.id]);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableArea;
