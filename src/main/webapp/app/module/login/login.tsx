/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */


import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import authentication, { login } from '../../shared/reducers/authentication';
import { RouteComponentProps } from 'react-router-dom';

interface ILoginProps  extends StateProps, DispatchProps, RouteComponentProps<{}> {} {

}

interface ILoginState {
  username: string;
  password: string;
  rememberMe: boolean;
  isAuthenticated: boolean;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props) {
    super(props);
    this.loginSubmit = this.loginSubmit.bind(this);
  }
  state: ILoginState = {
    username: 'admin',
    password: 'admin',
    rememberMe: false,
    isAuthenticated: this.props.isAuthenticated
  };

  loginSubmit =() => {
    const { username, password, rememberMe} = this.state;
    this.props.login(this.state.username, this.state.password, this.state.rememberMe);
  };

  render() {
    const { username, password, rememberMe} = this.state;
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
                  <input className="input100" type="text" value={username} name="username" placeholder="Username"></input>
                  <span className="focus-input100-1"></span>
                  <span className="focus-input100-2"></span>
                </div>

                <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" value={password} name="password" placeholder="Password"></input>
                  <span className="focus-input100-1"></span>
                  <span className="focus-input100-2"></span>
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

const mapStateToProps = storeState => ({
  isAuthenticated: storeState.authentication.isAuthenticated,
  loginError: storeState.authentication.loginError
});

const mapDispatchToProps = { login };

//const mapDispatchToProps = dispatch => ({ login, dispatch });

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

export default connect(mapStateToProps, mapDispatchToProps) (Login);
