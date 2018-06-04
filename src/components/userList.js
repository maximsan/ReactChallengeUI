import React from "react";
import UserData from "./userData";

export default class UserList extends React.Component {
  render() {
    const { data, update } = this.props;

    if (!data) return <div>Loading...</div>;

    const users = data.map((user, index) => {
      return (
        <UserData
          user={user}
          index={index}
          key={`user - ${index}`}
          update={update}
        />
      );
    });

    return (
      <table className="user-list table table-striped mr-2">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </table>
    );
  }
}
