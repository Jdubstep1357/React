import { useState } from "react";



interface Props {
    children: string;
    // Can pass color value on <button> or in App.tsx <button>
    // Only allows colors mentioned here
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const ReactButton =({ children, onClick, color }: Props) => {
    return (
    <>
<button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>

    </>
    )
}

export default ReactButton;