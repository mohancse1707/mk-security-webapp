import './home.css';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import { IRootState } from 'app/shared/reducers';

export interface IHomeProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface IHomeState {
  title: string;
}

export class Home extends React.Component<IHomeProp, IHomeState> {

  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div>
        <div className="fixed-top menu-banner">
          <div className="container fixed-top">
            <nav className="navbar navbar-expand-md navbar-dark bg-purple mt-header-menu-61">
              <a className="navbar-brand" href="#">Offcanvas</a>
              <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"/>
              </button>

              <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Switch account</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>
        </div>

        <div className="container mt-70">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Library</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
          <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
            <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates {this.props.isAuthenticated ? 'TRUE' : 'FALSE'}</h6>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1" alt="" className="mr-2 rounded"/>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1" alt="" className="mr-2 rounded"/>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
            <small className="d-block text-right mt-3">
              <a href="#">All updates</a>
            </small>
          </div>

          <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
            <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">Follow</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <small className="d-block text-right mt-3">
              <a href="#">All suggestions</a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
