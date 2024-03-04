import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import styles from "./IconWrapper.module.css";

type PropsType = {
  icon: string | StaticImport;
  alt?: string;
  onClick?: () => any;
};

const IconWrapper = (props: PropsType) => {
  return (
    <div onClick={props.onClick} className={styles.wrapper}>
      <Image src={props.icon} alt={props.alt ?? "Icon"} className={styles.icon} />
    </div>
  );
};

export default IconWrapper;
