import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    render(){
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    
    userId: state.auth.userId,
    email: state.auth.email,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);