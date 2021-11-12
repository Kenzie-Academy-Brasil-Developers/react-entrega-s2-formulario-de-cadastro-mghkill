import { Switch, Route } from "react-router-dom";
import Form from "../components/Form";
import Dashboard from "../components/Dashboard";
import { Redirect } from "react-router";
import { useState } from "react";

const Routes = () => {
  const [allowed, setAllowed] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Form setAllowed={setAllowed} setUserData={setUserData} />
        </Route>

        <Route path="/dashboard">
          {!allowed ? (
            <Redirect to="/" />
          ) : (
            <Dashboard setAllowed={setAllowed} userData={userData} />
          )}
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
