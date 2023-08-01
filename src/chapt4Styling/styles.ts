import styled from "styled-components";
import { AlertProps } from "./Alert";

export const AlertContainer = styled.div<AlertProps>`
   display: inline-flex;
   flex-direction: column;
   text-align: left;
   padding: 10px 15px;
   border-radius: 4px;
   border: 1px solid transparent;
   color: ${props => (props.type === "warning" ? "#e7650f" : "#118da0")};
   background-color: ${alert => alert.type === "warning" ? "#f3e8da" : "#dcf1f3"}
`

export const Alerter = styled.div.attrs<AlertProps>(
   ({ type }) => ({
      style: {
         display: 'inline-flex',
         flexDirection: 'column',
         textAlign: 'left',
         padding:' 10px 15px',
         borderRadius: 20,
         border: '1px solid ',
         color: type === "warning" ? "red" : "blue",
         backgroundColor: type === "warning" ? "#f3e8da" : "#dcf1f3"
      }
   })
)`
`