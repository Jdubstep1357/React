import type { ReactNode } from "react";

// passing text as props
// children passes along to App.tsx
interface Props {
    children: ReactNode;
}


const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">
      { children }
    </div>
  )
}

export default Alert
