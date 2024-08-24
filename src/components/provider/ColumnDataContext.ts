/* eslint react-refresh/only-export-components: 0 */
import { Columns } from "../../types/types";
import { defaultColumns } from "../../lib/util";
import { createContext, useContext } from "react";

export const columnContext = createContext<Columns>(defaultColumns);
export const useColumns = () => useContext(columnContext);
