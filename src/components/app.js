import React from "react";

import SearchBar from "./searchBar";
import ActiveUser from "./activeUser";
import UserList from "./userList";
import ToolBar from "./toolBar";
import AddUser from "./addUser";

import load from "../actions/load";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      activeUser: 0,
      term: "",
      isSorted: { name: true, age: true },
      showAddUser: false
    };

    this.showAddForm = this.showAddForm.bind(this);
    this.closeAddForm = this.closeAddForm.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  loadData() {
    const { data } = this.props;

    load(data)
      .then(users => {
        this.initialData = JSON.parse(users);
        this.setState({
          data: this.initialData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.loadData();
  }

  updateData (state) {
    this.setState(state);
  };

  showAddForm() {
    this.setState({
      showAddUser: !this.state.showAddUser
    });
  }

  closeAddForm() {
    this.setState({
      showAddUser: !this.state.showAddUser
    });
  }

  render() {
    const { activeUser, term, data, isSorted, showAddUser } = this.state;
    return (
      <div className="app container-fluid">
        <div className="row mt-4">
          <div className="col-12">
            <SearchBar
              term={term}
              data={this.initialData}
              update={this.updateData}
            />
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <ToolBar
            update={this.updateData}
            data={data}
            isSorted={isSorted}
            initialData={this.initialData}
            activeUser={activeUser}
          />
          <button
            type="button"
            className="btn btn-default ml-3 text-uppercase add-new-user global-buttons"
            onClick={this.showAddForm}
          >
            Add new user
          </button>
        </div>
        <div className="row user-list-data">
          <div className="col-12 col-sm-8 col-md-9 col-lg-10 user-list">
            <UserList data={data} update={this.updateData} />
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2 active-user">
            <ActiveUser activeUser={activeUser} data={data} />
          </div>
          {
            showAddUser ? 
            <AddUser
              update={this.updateData}
              showAddUser={showAddUser}
              onClick={this.closeAddForm}
              data={data} 
              />
              : null
          }
        </div>
      </div>
    );
  }
}
