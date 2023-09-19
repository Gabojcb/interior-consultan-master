import * as React from "react";

export const CreateContext = React.createContext({} as any);
export const createUseContext = () => React.useContext(CreateContext);
