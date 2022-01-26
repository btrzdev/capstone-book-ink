import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/Auth.Context";

interface Props extends RouteProps {
  isPrivate?: boolean;
  isTattooist?: boolean;
  component: ComponentType;
}

// true e true = ok
// true e false = n ok
// false e true = n ok
// false e false = ok

export const Route = ({
  isPrivate = false,
  isTattooist,
  component: Component,
  ...rest
}: Props) => {
  const { accessToken, user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect
            to={
              isPrivate
                ? "/"
                : user.isTattooists
                ? "/dashboard-tattooist"
                : "/dashboard-client"
            }
          />
        )
      }
    />
  );
};
