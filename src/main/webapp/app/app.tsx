import React, { useEffect } from 'react';
import './app.css';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from 'app/routes';
import { getSession } from 'app/shared/reducers/authentication';
import Header from 'app/shared/layout/header';
import { IRootState } from 'app/shared/reducers';
import Footer from "app/shared/layout/footer";

const baseHref = document
  .querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '');

export interface IAppProps extends StateProps, DispatchProps {}

export const App = (props: IAppProps) => {
  useEffect(() => {
    props.getSession();
  }, []);

  return (
      <Router basename={baseHref}>
        <Header isAuthenticated={props.isAuthenticated} isAdmin={props.isAuthenticated} />
        <main className="container">
          <AppRoutes />
        </main>
        <Footer/>
      </Router>
    );
  };

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  account: authentication.account
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
