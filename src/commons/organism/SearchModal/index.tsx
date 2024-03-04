import React from "react";

import { XIcon } from "@/assets";
import IconWrapper from "@/commons/atom/IconWrapper";
import SearchSection from "@/commons/molecule/SearchSection";
import styles from "./SearchModal.module.css";

type PropsType = {
  show?: boolean;
  onClose?: () => any;
  onSubmit?: (term: string) => any;
};

const SearchModal = (props: PropsType) => {
  return (
    <div className={`${styles.Rectangle} ${props.show ? styles.modalShow : ""}`}>
      <div className={styles.closeBtn}>
        <IconWrapper icon={XIcon} alt="Close icon" onClick={props.onClose} />
      </div>
      <div className={`${styles.mbx8}`}>
        <h2>Search</h2>
      </div>
      <div className="flex w-full">
        <SearchSection onSearch={props.onSubmit} submitColor="primary" />
      </div>
    </div>
  );
};

export default SearchModal;
