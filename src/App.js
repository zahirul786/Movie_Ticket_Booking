import './index.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Route from "./context/Route";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
function App() {
  const [shows, setShows] = useState([]);
  const [showSummary, setShowSummary] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setShows(response.data);

    }
    fetchData();
  }, []);

  const handleClick = (item) => {
    setShowSummary(item);
  }

  return (
    <div>
      <Route path="/">
        <ShowList shows={shows} onClick={handleClick} />
      </Route>
      <Route path="/SummaryPage">
        <ShowDetails showSummary={showSummary} onClick={handleClick} />
      </Route>
    </div>
  );
};

export default App;
