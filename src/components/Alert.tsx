import type { ReactNode } from "react";

// passing text as props
// children passes along to App.tsx
interface Props {
    children: ReactNode;
    onClose: () => void;
}
// onClose notifies parent that user has clicked on button

// onClose clicks on button causing it to close


// onClose passed to Alert to call function
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      { children }
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert"></button>

    </div>
  )
}

export default Alert
