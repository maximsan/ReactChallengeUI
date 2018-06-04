import React from "react";

export default ({ user, update, index, data }) => {
  const { image, name, age, phone } = user;

  const handleDeleteUser = e => {
    e.preventDefault();
    const name = e.target.value;
    const user = data.find(u => {
      // eslint-disable-next-line
      return u.Name == name;
    });
    const newData = data;
    newData.splice(index, 1);
    deleteUser(`${baseUrl}/api/users/${index + 1}`, user)
      .then(result => {
        if (result != undefined || result != null) {
          update({
            data: newData
          });
        }
      })
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  return (
    <tr onClick={() => update({ active: index })}>
      <td className="image-value">
        <img src={`images/${image}.svg`} alt={image} className="user-image" />
      </td>
      <td className="name-value">
        <h4>{name}</h4>
      </td>
      <td className="age-value">{age}</td>
      <td className="phone-value">8 {phone}</td>
      <td>
        <button
          value={name}
          className="btn btn-warning"
          onClick={e => handleDeleteUser(e)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};


