import { Switch, Route } from "react-router-dom";
import Form from "../components/Form";
import Dashboard from "../components/Dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
