import React from "react";
import SearchBar from "./searchBar";
import load from "./utils/load";
import ActiveUser from "./activeUser";
import UserList from "./userList";
import ToolBar from "./toolBar";
import AddUser from "./addUser";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: "",
      isSorted: true,
      showAddUser: false
    };

    //this.updateData = this.updateData.bind(this);
    this.showPopUpForm = this.showPopUpForm.bind(this);
  }

  loadData() {
    load(this.props.data)
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

  updateData = state => {
    this.setState(state);
  };

  showPopUpForm () {
    this.setState({
      showAddUser: !this.state.showAddUser
    });
  };

  closePopUpForm() {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  render() {
    const { active, term, data, isSorted, showAddUser } = this.state;
    return (
      <div className="app container-fluid">
        <div className="row mt-4">
          <div className="col-xs-10 col-10 ">
            <SearchBar
              term={term}
              data={this.initialData}
              update={this.updateData}
            />
          </div>
          <div className="col-xs-2 col-1 mr-1 pl-0">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="row">
          <ToolBar
            initialData={this.initialData}
            data={data}
            update={this.updateData}
            isSorted={isSorted}
          />
          <button
            type="button"
            className="btn btn-default"
            //data-toggle="modal"
            //data-target="#exampleModal"
            onClick={this.showPopUpForm}
          >
            Add new user
          </button>          
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-8 col-md-9 col-lg-10">
            <UserList data={data} update={this.updateData} />
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser active={active} data={data} />
          </div>
        </div>

        {
          showAddUser ? <AddUser 
          update={this.updateData} 
          closePopUpForm={this.showPopUpForm}/> 
          : null
        }
      </div>
    );
  }
}
