import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EntryDetails = ({ entries }) => {
  const { id } = useParams();
  const history = useHistory();

  return entries
    .filter((item) => item.id.toString() === id)
    .map((item) => (
      <div className="detail" key={id}>
        <div>
          <b>Task: </b>
          {item.task}
        </div>
        <div>
          <b>Category: </b>
          {item.category}
        </div>
        <div>
          <b>Notes: </b>
          {item.notes}
        </div>
        <button onClick={history.goBack}>Back</button>
      </div>
    ));
};

export default EntryDetails;
