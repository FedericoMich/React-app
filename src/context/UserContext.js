import { createContext } from "react";
import { Students } from "../api/userMock";

export const User = createContext(Students);
