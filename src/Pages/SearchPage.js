import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function SearchPage(props) {

  const navigate = useNavigate();
  const [destination,setDestination] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="SearchPage">
        <h2>Destination</h2>
      <input
          size="25"
          type="text"
          placeholder="Where are you going to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
    </div>
  );
}

export default SearchPage;
