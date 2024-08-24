/* eslint react-refresh/only-export-components: 0 */
import { Data } from "../../types/types";
import { defaultData } from "../../lib/util";
import { createContext, useContext } from "react";

export const dataContext = createContext<Data>(defaultData);
export const useData = () => useContext(dataContext);
