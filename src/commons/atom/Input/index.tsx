import React, { InputHTMLAttributes } from "react";

import styles from "./input.module.css";

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {};

const Input = ({ type = "text", ...props }: PropTypes) => {
  return <input type={type} className={styles.Rectangle} {...props} />;
};

export default Input;
