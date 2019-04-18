import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userClicked } from './userListActions';

class UserList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.users.map((user) => {
                        return (
                            <li key={user.id} onClick={() => { this.props.userClicked(user) }}>{user.name}</li>
                        )
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return (
        {
            users: state.users
        }
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userClicked: userClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
