import { useState } from "react";
import styles from "./Button.module.css";


interface Props {
    children: string;
    // Can pass color value on <button> or in App.tsx <button>
    // Only allows colors mentioned here
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const ReactButton =({ children, onClick, color = "primary" }: Props) => {
    return (
    <>
<button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>

    </>
    )
}

export default ReactButton;