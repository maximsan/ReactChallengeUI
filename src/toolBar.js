import React from "react";

export default ({ update, data, initilData, isSorted }) => {
  //   const sortAsc = type => {
  //     const sorted = [].slice.call(data).sort((a, b) => {
  //       if (a[type] === b[type]) {
  //         return 0;
  //       }
  //       return a[type] > b[type] ? 1 : -1;
  //     });

  //     update({
  //       activeUser: 0,
  //       data: sorted
  //     });
  //   };

  //   const sortDesc = type => {
  //     const sorted = [].slice.call(data).sort((a, b) => {
  //       if (a[type] === b[type]) {
  //         return 0;
  //       }
  //       return a[type] < b[type] ? 1 : -1;
  //     });

  //     update({
  //       activeUser: 0,
  //       data: sorted
  //     });
  //   };

  const sort = type => {
    let direction = isSorted ? 1 : -1;

    var sorted = data.slice().sort((a, b) => {
      if (a[type] === b[type]) {
        return 0;
      }
      return a[type] > b[type] ? direction : direction * -1;
    });

    update({
      activeUser: 0,
      data: sorted,
      isSorted: !isSorted
    });
  };

  return (
    <div className="container-fluid">
      <div className="row pl-3 mt-4">
        <button className="btn btn-default mr-2 text-uppercase mb-2 sort-button-name" onClick={() => sort("name")}>
          <i className="fa fa-sort-alpha-asc" />Sort names
        </button>
        <button className="btn btn-default mr-2 text-uppercase sort-button-age" onClick={() => sort("age")}>
          <i className="fa fa-sort-numeric-asc" />Sort ages
        </button>
      </div>
    </div>
  );
};
