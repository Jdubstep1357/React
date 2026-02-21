import type { ReactNode } from "react";

// Children passes value to Parent file allowing it to be outputted
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
