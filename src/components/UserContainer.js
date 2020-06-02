// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "./redux/users/userActions";

// function UserContainer({ users, dispatchUsers }) {
//   console.log("Users", users);
//   useEffect(() => {
//     dispatchUsers();
//   }, []);

//   return (
//     <div>
//       {users.loading ? <h2>...Loading</h2> : <h4>{users.errors}</h4>}
//       <h2>UserList</h2>
//       {users.map((user) => (
//         <h5 key={user.id}>{user.name}</h5>
//       ))}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   users: state.users.users,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatchUsers: (users) => dispatch(fetchUsers(users)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/users/userActions";

function UserContainer({ userData, dispatchData }) {
  useEffect(() => {
    dispatchData();
  }, []);

  return (
    <div>
      <h1>User Names</h1>
      {userData.loading ? <h3>...Loading</h3> : <h3>{userData.errors}</h3>}
      {userData && userData.map(user => <h3 key={user.id}>{user.name}</h3>)}
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.users.users
});

const mapDispatchToProps = dispatch => ({
  dispatchData: userData => dispatch(fetchUsers(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
