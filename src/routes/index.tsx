import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { DashboardClient } from "../pages/DashboardClient";
import { DashboardTattooist } from "../pages/DashboardTattooist";
import { Route } from "./Route";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PerfilTattooist } from "../pages/PerfilTattooist";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/Auth.Context";

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard-client" component={DashboardClient} isPrivate />
      <Route
        path="/dashboard-tattooist"
        component={DashboardTattooist}
        isPrivate
      />
      <Route path="/perfil" component={PerfilTattooist} isPrivate />
      <Route path="/register" component={Register} />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
