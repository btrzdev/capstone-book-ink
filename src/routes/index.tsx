import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { DashboardClient } from "../pages/Dashboard";
import { Route } from "./Route";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard-client" component={DashboardClient} isPrivate />
      <Route path="/register" component={Register} />
    </Switch>
  );
};
