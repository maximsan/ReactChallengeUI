import React from "react";
import EditUser from "./editUser";

export default class UserData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editUser: false
    };
  }

  handleDeleteUser(e) {
    const { data, index } = this.props;
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
  }

  showEditForm () {
    this.setState({
      editUser: !this.state.editUser
    });
  };

  closeEditForm () {
    this.setState({
      editUser: !this.state.editUser
    });
  };

  render() {
    const { user, index, data, update } = this.props;
    const { image, name, age, phone } = user;
    const { editUser } = this.state;

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
            onClick={this.handleDeleteUser.bind(this)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            onClick={this.showEditForm.bind(this)}
            className="btn btn-outline-secondary"
          >
            Edit
          </button>
          {editUser ? (
            <EditUser
              editUser={editUser}
              onClick={this.closeEditForm.bind(this)}
              data={data}
              update={update}
            />
          ) : null}
        </td>
      </tr>
    );
  }
}
