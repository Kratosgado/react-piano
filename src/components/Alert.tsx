
type AlertProps = {
   type: "warning" | "information"
   heading: string
   children: React.ReactNode
}

export const Alert = (props: AlertProps) => {
   const { type, heading, children } = props;
   let today: Date = new Date;
   return (
      <div>
         <div>
            <span role="img"
               aria-label={type === "warning" ? "Warning" : "Information"}>
               {type === "warning" ? "⚠️" : "i"}</span>
            <span>{heading}</span>
         </div>
         <div>{children} date: {today.toDateString()}</div>
      </div>
   )
}