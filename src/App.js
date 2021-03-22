import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EntryDetails from "./EntryDetails";
import { useState } from "react";

function App() {
  const [entries, setEntry] = useState([
    { id: 0, description: "test", category: "css", content: "test content" },
  ]);

  const handleAdd = (entry) => {
    if (entries.length === 0) {
      entry.id = 0;
    } else {
      entry.id = entries[entries.length - 1].id + 1;
    }
    setEntry([...entries, entry]);
  };

  const handleDelete = (arr) => {
    const newEntries = entries.filter((item) => !arr.includes(item.id));
    setEntry(newEntries);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              entries={entries}
            />
          </Route>
          <Route exact path="/home/:id">
            <EntryDetails entries={entries} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
