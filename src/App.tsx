import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import BigWrapper from './container/';
import UsersPage from './container/usersPage';
import UsersConfigPage from './container/usersConfigPage';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Switch>
        <Route 
          exact
          path={'/'}
          render={() => (
            <BigWrapper {...this.props}>
              <UsersPage />
            </BigWrapper>
          )}
        />
        <Route 
          exact
          path={'/new'}
          render={() => (
            <BigWrapper {...this.props}>
              <UsersConfigPage {...this.props} />
            </BigWrapper>
          )}
        />
      </Switch>
    )
  }
}

export default App;
