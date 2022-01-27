import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Route } from "./Route";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PerfilTattooist } from "../pages/PerfilTattooist";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/Auth.Context";

export const Routes = () => {
  const { accessToken, user } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/perfil/:id" component={PerfilTattooist} isPrivate />
      <Route path="/register" component={Register} />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
