import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Route } from "./Route";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PerfilTattooist } from "../pages/PerfilTattooist";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/Auth.Context";
import { Bookings } from "../pages/Bookings";
import { CalendarApp } from "../pages/CalendarApp";

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/perfil" component={PerfilTattooist} isPrivate />
      <Route path="/register" component={Register} />
      <Route path="/calendar" component={CalendarApp} />
      <Route path="/bookings" component={Bookings} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
