import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import BigWrapper from './container/';
import UsersPage from './container/usersPage';
import UsersConfigPage from './container/usersConfigPage';
import store from './redux';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route 
            exact
            path={'/teaching-react-app/'}
            render={() => (
              <BigWrapper {...this.props}>
                <UsersPage />
              </BigWrapper>
            )}
          />
          <Route 
            exact
            path={'/teaching-react-app/new'}
            render={() => (
              <BigWrapper {...this.props}>
                <UsersConfigPage {...this.props} />
              </BigWrapper>
            )}
          />
        </Switch>
      </Provider>
    )
  }
}

export default App;
