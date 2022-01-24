import React, { useState } from "react";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");
  const [searchResultsArray, setSearchResultsArray] = useState([]);

  const onSearchSubmit = () => {
    const resultsArr = listArray.filter((item) =>
      item.text.includes(searchString)
    );

    setSearchResultsArray(resultsArr);

    setSearchString("");
  };

  return (
    <div className="search">
      <input
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        value={searchString}
        name={searchString}
        type="text"
        placeholder="Search Term"
      ></input>
      <button onClick={onSearchSubmit} value="searchSubmit">
        Search
      </button>
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
