import React from 'react';
import { connect } from 'react-redux';

class UserAge extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.userClicked != null ? <React.Fragment>
                    <h3>the age of user {this.props.userClicked.name} is</h3>
                    {this.props.userClicked.age}
                </React.Fragment> : ''}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return (
        {
            userClicked: state.activeUser
        }
    );
}
export default connect(mapStateToProps)(UserAge);