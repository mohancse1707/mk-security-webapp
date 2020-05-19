import './home.css';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getSession } from 'app/shared/reducers/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';

export interface IHomeProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface IHomeState {
  title: string;
}

export class Home extends React.Component<IHomeProp, IHomeState> {

  componentDidMount() {
    this.props.getSession();
    const script = document.createElement('script');
    script.src = './static/js/offcanvas.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
          <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
            <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates {this.props.isAuthenticated ? 'TRUE' : 'FALSE'}</h6>
            <div className="media text-muted pt-3">
              <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"/>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username {this.props.account.firstName}</strong>
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
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  account: authentication.account
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
