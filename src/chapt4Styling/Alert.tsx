
import { useState } from "react";
import styles from './Alert.module.css'

type AlertProps = {
   type: "warning" | "information"
   heading: string
   children: React.ReactNode
   closable: boolean
   onClose?: ()=> void
}

export const Alert = (props: AlertProps) => {
   const { type, heading, children, closable, onClose} = props;
   const [visible, setVisible] = useState(true);

   if (!visible) return null;

   const handleCloseClick = () => {
      setVisible(false);
      if (onClose) {
         onClose();
      }
   };

   return (
      <div className={`${styles.container} ${styles[type]}`}>
         <div className={styles.header}>
            <span
               className={styles.headerIcon}
               role="img"
               aria-label={type === "warning" ? "Warning" : "Information"}>
               {type === "warning" ? "⚠️" : "ℹ️"}</span>
            <span className={styles.headerText}>{heading}</span>
            {closable && (
            <button className={styles.closeButton} aria-label="Close" onClick={handleCloseClick}>
               <span role="img" aria-label="Close">X</span>
            </button>
         )}
         </div>
         <div className={styles.content}>{children}</div>
      </div>
   )
}