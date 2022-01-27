import React, { useContext, useState } from "react";

import { TodoFormContext } from "./TodoForm";

export default function SearchResults() {
  const { searchResultsArray } = useContext(TodoFormContext);

  return (
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
  );
}
