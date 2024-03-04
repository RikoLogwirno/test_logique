import React from "react";
import Image from "next/image";

import { CurrencyIcon } from "@/assets";
import IconWrapper from "@/commons/atom/IconWrapper";
import styles from "./Card.module.css";

type PropsType = {
  img?: string;
  artist?: string;
  title?: string;
  genre?: string;
  price?: string;
};

const Card = (props: PropsType) => {
  return (
    <div className={styles.card}>
      <div className="flex flex-row gap-3">
        {/* <Image
          src={props.img ?? "https://is1-ssl.mzstatic.com/image/thumb/Video/af/de/b2/mzl.uybixywx.jpg/100x100bb.jpg"}
          alt={props.title ?? ""}
          width={100}
          height={100}
          className={styles.Bitmap}
        /> */}
        <img
          src={props.img ?? "https://is1-ssl.mzstatic.com/image/thumb/Video/af/de/b2/mzl.uybixywx.jpg/100x100bb.jpg"}
          alt={props.title ?? ""}
          className={styles.Bitmap}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className={`${styles.artist}`}>Travie McCoy</span>
            <p className={`${styles.title}`}>Rough Water (feat. Jason Mraz)</p>
          </div>
          <div className="flex justify-between">
            <div className={`${styles.genre}`}>Pop</div>
            <div className="flex items-center gap-3">
              <IconWrapper icon={CurrencyIcon} />
              <span className={styles.currency}>1.29</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
