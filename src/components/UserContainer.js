import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/users/userActions";

function UserContainer({ users, dispatchUsers }) {
  useEffect(() => {
    dispatchUsers();
  }, []);

  return (
    <div>
      {users.loading ? <h2>...Loading</h2> : <h4>{users.errors}</h4>}
      <h2>UserList</h2>
      {users.map((user) => (
        <h5 key={user.id}>{user.name}</h5>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUsers: (users) => dispatch(fetchUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
