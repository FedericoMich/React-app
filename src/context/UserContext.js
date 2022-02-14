import { createContext } from "react";
import { students } from "../api/userMock";


export const User = createContext(
  {
    students,
    setStudent: () => {}
  }
);
