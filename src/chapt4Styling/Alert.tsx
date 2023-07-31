
import { useState } from "react";
import "./Alert.css";

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
      <div className={`container ${type}`}>
         <div className="header">
            <span
               className="header-icon"
               role="img"
               aria-label={type === "warning" ? "Warning" : "Information"}>
               {type === "warning" ? "⚠️" : "ℹ️"}</span>
            <span className="header-text">{heading}</span>
            {closable && (
            <button className="close-button" aria-label="Close" onClick={handleCloseClick}>
               <span role="img" aria-label="Close">X</span>
            </button>
         )}
         </div>
         <div className="content">{children}</div>
      </div>
   )
}