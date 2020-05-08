/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { login, getSession } from '../../shared/reducers/authentication';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import './login.css';
import { IRootState } from 'app/shared/reducers';

interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps<{}> {
}

interface ILoginState {
  username: string;
  password: string;
  rememberMe: boolean;
}

class Login extends React.Component<ILoginProps, ILoginState> {

  state: ILoginState = {
    username: null as string,
    password: null as string,
    rememberMe: false
  };

  componentDidUpdate(prevProps: ILoginProps) {
    if (this.props.isAuthenticated !== prevProps.isAuthenticated) {

    }
  }

  onChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState(state => ({ [event.target.name]: event.target.value }));
  };

  loginSubmit = () => {
    const { username, password, rememberMe } = this.state;
    return this.props.login(this.state.username, this.state.password, this.state.rememberMe);

  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/home', search: location.search } };
    const { showModal } = this.state;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    const { username, password, rememberMe } = this.state;
    return (
      <div>
        <div className="login100-form validate-form">
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <span className="login100-form-title p-b-33">
            Account Login
          </span>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" value={username} onChange={this.onChange} name="username" placeholder="Username"/>
                  <span className="focus-input100-1"/>
                  <span className="focus-input100-2"/>
                </div>

                <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" value={password} onChange={this.onChange} name="password" placeholder="Password"/>
                  <span className="focus-input100-1"/>
                  <span className="focus-input100-2"/>
                </div>

                <div className="container-login100-form-btn m-t-20">
                  <button type="submit" onClick={this.loginSubmit} className="login100-form-btn">
                    Sign in
                  </button>
                </div>

                <div className="text-center p-t-45 p-b-4">
                <span className="txt1">
                  Forgot
                </span>

                  <a href="#" className="txt2 hov1">
                    Username / Password?
                  </a>
                </div>

                <div className="text-center">
                <span className="txt1">
                  Create an account?
                </span>

                  <a href="#" className="txt2 hov1">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
  showModal: authentication.showModalLogin
});

const mapDispatchToProps = { login };

// const mapDispatchToProps = dispatch => ({ login, dispatch });

// const mapDispatchToProps = dispatch => ({
//   login: () => {
//     dispatch(login);
//   },
//   dispatch
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => {
//       dispatch(login)
//     }
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     ...bindActionCreators({ login }, dispatch)
//   }
// }

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
