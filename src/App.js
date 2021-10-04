import Layout from './pages/Layout';
import Collection from './pages/Collection/Collection';
import DetailPage from './pages/DetailPage';
import * as ROUTES from './constants/path';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout />
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.COLLECTION}
            component={() => <Collection />}
          />
          <Route path={ROUTES.CARD} render={() => <DetailPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
