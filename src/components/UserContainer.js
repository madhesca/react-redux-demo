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

function UserContainer({ userData, fetchData }) {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Title</h1>
      {userData.loading ? <h3>...Loading</h3> : <h3>{userData.errors}</h3>}
      {userData && userData.map((user) => <h5 key={user.id}>{user.name}</h5>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
