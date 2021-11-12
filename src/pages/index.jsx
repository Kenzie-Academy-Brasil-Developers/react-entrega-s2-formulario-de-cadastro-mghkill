import { Switch, Route } from "react-router-dom";
import Form from "../components/Form";
import Dashboard from "../components/Dashboard";
import { Redirect } from "react-router";
import { useState } from "react";

const Routes = () => {
  const [allowed, setAllowed] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Form setAllowed={setAllowed} />
        </Route>

        <Route path="/dashboard">
          {!allowed ? (
            <Redirect to="/" />
          ) : (
            <Dashboard setAllowed={setAllowed} />
          )}
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
