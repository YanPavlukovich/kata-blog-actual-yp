import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  redirectPath: string;
  children?: ReactNode;
};

export const ProtectRoute = (props: Props) => {
  const { isAllowed, redirectPath, children } = props;

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
