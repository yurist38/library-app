import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import booksActions from './actions/books';
import configureStore from './configureStore';
import Browse from './pages/Browse';

const history = createHistory();
const store = configureStore(history);

class App extends Component {
  public componentDidMount() {
    store.dispatch(booksActions.requestBooks());
  }

  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route component={Browse} exact path="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('library-app'));
