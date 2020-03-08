import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Cookies from 'js-cookie';

import { history } from 'app/utils/helpers';

import {
  selectorIsCustomer,
  selectorIsManager,
  selectorIsOperator,
  selectorIsAdministrator,
} from 'app/redux/profile/selectors';

import App from 'app/components/App';
import AppLayout from 'app/containers/AppLayout';
import LastCases from 'app/containers/LastCases';
import Profile from 'app/containers/Profile';
import Case from 'app/containers/Case';
import CaseInfo from 'app/containers/CaseInfo';
import UsersList from 'app/containers/UsersList';

import CasesList from 'app/containers/CasesList';

import LanguageProvider from 'app/components/LanguageProvider';
import Login from 'app/containers/Login';
import ForgetPassword from 'app/containers/ForgetPassword';
import ResetPassword from 'app/containers/ResetPassword';
import ModalsContainer from 'app/components/ModalsContainer';
import Dashboard from 'app/components/Dashboard';

class Routes extends Component {
  getRoutes() {
    return [
      {
        component: AppLayout,
        routes: [
          {
            path: '/',
            exact: true,
            component: Dashboard,
          },
          {
            path: '/login',
            exact: true,
            component: Login,
          },
          {
            path: '/profile',
            exact: true,
            component: Profile,
          },
          {
            path: '/forget',
            exact: true,
            component: ForgetPassword,
          },
          {
            path: '/reset/:resetPasswordKey',
            exact: true,
            component: ({ match }) => <ResetPassword resetPasswordKey={match.params.resetPasswordKey} />, // eslint-disable-line
          },
          {
            path: '/cases',
            exact: true,
            component: CasesList,
          },
          {
            path: '/cases/:id',
            exact: true,
            component: (props) =>  <Case {...props} id={props.match.params.id} />, // eslint-disable-line
          },
          {
            path: '/cases/view/:id',
            exact: true,
            component: (props) =>  <CaseInfo {...props} id={props.match.params.id} />, // eslint-disable-line
          },
          {
            path: '/users',
            exact: true,
            component: UsersList,
          },
          {
            path: '/last-cases',
            exact: true,
            component: LastCases,
          },
        ],
      },
    ];
  }

  render() {
    return (
      <Router history={history}>
        <App>
          {renderRoutes(this.getRoutes())}
        </App>
      </Router>
    );
  }
}

export default Routes;
