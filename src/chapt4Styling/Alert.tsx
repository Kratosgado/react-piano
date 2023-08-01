import { useState } from "react";
import { styled } from "styled-components";
import {  Alerter } from "./styles";


export type AlertProps = {
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
      <Alerter {...props}>
      <div className="flex items-center mb-1">
            <span
                className="w-7"
               role="img"
               aria-label={type === "warning" ? "Warning" : "Information"}>
               {type === "warning" ? "⚠️" : "ℹ️"}</span>
            <span className="font-bold">{heading}</span>
            {closable && (
            <button className="border-none bg-transparent ml-auto cursor-
            pointer" aria-label="Close" onClick={handleCloseClick}>
               <span role="img" aria-label="Close">X</span>
            </button>
         )}
         </div>
         <div  className="ml-7 text-black">{children}</div>
      </Alerter>
   )
}

// export const DragPreviewWrapper = styled.div.attrs<DragPreviewProps>(
//     ({ position: { x, y }, isPreview }) => ({
//     style: {
//       transform: `translate(${x}px, ${y}px) rotate(${isPreview ? "5deg" : "0deg"})`,
//     },
//   }))<{ position: Position; isPreview?: boolean }>`
//     // Styles for DragPreviewWrapper
//   `

