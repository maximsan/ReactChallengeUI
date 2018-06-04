import React from "react";

export default ({ data, active }) => {
  if (!data || !data[active]) return <h3>Nothing was found...</h3>;

  const user = data[active];

  return (
    <div className="thumbnail position-fixed">
      <img className="card-img-top" src={`images/${user.image}.svg`} alt={user.image} />

      <div className="thumbnail-caption">
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Favourite animal:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>

        <div >
          <span className=""><b>Phraze:</b></span>
          <br />
          <blockquote className="text-center mt-4">
            <i className="fa fa-quote-left mr-2 align-top"
              aria-hidden="true"></i>
            {user.phrase}
            <hr />
          </blockquote>
        </div>
      </div>
    </div>
  );
};
