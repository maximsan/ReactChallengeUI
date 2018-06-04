import React from "react";

class SearchBar extends React.Component {
  dataSearch = e => {
    const { data, update } = this.props;
    const value = e.target.value.toLowerCase();

    const filter = data.filter(user => {
      return user.name.toLowerCase().includes(value);
    });

    update({
      data: filter,
      active: 0,
      term: value
    });
  };

  render() {
    const { term } = this.props;
    return (
      <div className="search-name">
        <input
          className="form-control"
          type="text"
          aria-label="Search"
          value={term}
          placeholder="Search in here..."
          onChange={this.dataSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
