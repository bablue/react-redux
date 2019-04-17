import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
    render() {
        return (
            <ul>
            {
            this.props.users.map((user) => {
                return (
                    <li>{user.name}</li>
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

export default connect(mapStateToProps)(UserList);
