import { memo } from "react";

type Props = {
   onClick: () => void,
}

export const Reset = memo(({ onClick }: Props) => {
   Reset.displayName = 'Reset';
   console.log("Render reset");
   
   return <button onClick={onClick}>Reset</button>
});