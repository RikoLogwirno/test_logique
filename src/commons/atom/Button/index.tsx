import React from "react";

import styles from "./button.module.css";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

const Button = (props: PropsType) => {
  return (
    <button className={styles.Rectangle} {...props}>
      {props.label ? <span className={styles.Search}>{props.label}</span> : props.children}
    </button>
  );
};

export default Button;
