import React, { useContext, useState } from "react";
import { Input, Button } from "semantic-ui-react";

import { TodoFormContext } from "./TodoForm";

import SearchResults from "./SearchResults";

export default function SearchBar() {
  const { listArray, setSearchResultsArray } = useContext(TodoFormContext);
  const [searchString, setSearchString] = useState("");

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
      <SearchResults />
    </div>
  );
}
