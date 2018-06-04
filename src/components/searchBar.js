import React from "react";

class SearchBar extends React.Component {
  dataSearch = e => {
    const data = this.props.data;
    const value = e.target.value.toLowerCase();

    const filter = data.filter(user => {
      return user.name.toLowerCase().includes(value);
    });

    this.props.update({
      data: filter,
      active: 0,
      term: value
    });
  };

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          value={this.props.term}
          placeholder="Please input here, who are you looking for?"
          onChange={this.dataSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
