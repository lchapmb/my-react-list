import React, { useContext, useState } from "react";
import { Input, Button } from "semantic-ui-react";

import { TodoFormContext } from "./TodoForm";

export default function SearchBar({
  searchResultsArray,
  setSearchResultsArray,
}) {
  const { listArray } = useContext(TodoFormContext);
  const [searchString, setSearchString] = useState("");
  // const [searchResultsArray, setSearchResultsArray] = useState([]);

  const onSearchSubmit = () => {
    const resultsArr = listArray.filter((item) =>
      item.text.includes(searchString)
    );

    setSearchResultsArray(resultsArr);

    setSearchString("");
  };

  return (
    <div className="search">
      <Input
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        value={searchString}
        name={searchString}
        type="text"
        placeholder="Search..."
      />
      <Button onClick={onSearchSubmit} value="searchSubmit">
        Search
      </Button>
      <br />
      <div>
        {searchResultsArray.map((searchResult) => (
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "lightblue",
              padding: 5,
              margin: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
            key={searchResult.key}
          >
            <div>{searchResult.key + " : " + searchResult.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
