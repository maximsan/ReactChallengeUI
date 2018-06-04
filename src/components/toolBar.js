import React from "react";

export default ({ update, data, initilData, isSorted }) => {

  const sort = type => {
    const issorted = isSorted[type];

    let direction = issorted ? 1 : -1;

    let sorted = data.slice().sort((a, b) => {
      if (a[type] === b[type]) return 0;
      return a[type] > b[type] ? direction : direction * -1;
    });

    if (type === "name") {
      const newSorted = Object.assign(
        {},
        { name: !isSorted["name"], age: isSorted["age"] }
      );
      update({
        activeUser: 0,
        data: sorted,
        isSorted: newSorted
      });
    }

    if (type === "age") {
      const newSorted = Object.assign(
        {},
        { name: isSorted["name"], age: !isSorted["age"] }
      );
      update({
        activeUser: 0,
        data: sorted,
        isSorted: newSorted
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row pl-3 mt-4 sorted-buttons">
        <button
          className="btn btn-default text-uppercase mb-2 sort-button-name"
          onClick={() => {
            sort("name");
          }}
        >
          <i
            className={
              isSorted.name ? "fa fa-sort-alpha-desc" : "fa fa-sort-alpha-asc"
            }
          />
          Sort Names
        </button>
        <button
          className="btn btn-default mr-2 text-uppercase sort-button-age"
          onClick={() => {
            sort("age");
          }}
        >
          <i
            className={
              isSorted.age
                ? "fa fa-sort-numeric-desc"
                : "fa fa-sort-numeric-asc"
            }
          />
          Sort Ages
        </button>
      </div>
    </div>
  );
};
