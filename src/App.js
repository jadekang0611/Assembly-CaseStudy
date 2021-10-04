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
        <Route
          exact
          path={ROUTES.COLLECTION}
          component={() => <Collection />}
        />
        <Route
          path={ROUTES.CARD}
          render={(props) => {
            console.log(props);
            <DetailPage {...props} />;
          }}
        />
      </Router>
    </>
  );
}

export default App;
