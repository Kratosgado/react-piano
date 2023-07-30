import { useEffect } from "react";
import { getPerson } from "./getPerson";

export const PersonScore = () => {
   useEffect(() => {
      getPerson().then((person) => console.log(person))
   }, []);

   return null
}