import React from "react";

export default ({ user, update, index }) => {
  function RenderTR(user) {
    return (
      <tr onClick={() => update({ active: index })}>
        <td>
          <img src={`images/${user.image}.svg`} alt={user.image} className="user-image" />
        </td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>8 {user.phone}</td>
        <td>
          <button
            value={user.name}
            className="btn btn-warning"
            onClick={e => handleDeleteUser(e)}
          >
            Delete
        </button>
        </td>
      </tr>
    );
  }
  return RenderTR(user);
};

