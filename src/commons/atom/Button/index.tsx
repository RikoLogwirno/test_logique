import React from "react";

import styles from "./button.module.css";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  color?: "primary" | "secondary";
};

const Button = (props: PropsType) => {
  return (
    <button className={`${styles.Rectangle} ${props.color === "primary" ? styles.primary : ""}`} {...props}>
      {props.label ? <span className={styles.Search}>{props.label}</span> : props.children}
    </button>
  );
};

export default Button;
