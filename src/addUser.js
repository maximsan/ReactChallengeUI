import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class AddUser extends React.Component {

    componentDidMount(){
        
    }

  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.props.update}>
                Save changes
              </button>
              <button type="button" className="btn btn-secondary" onClick={this.props.closePopUpForm}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
