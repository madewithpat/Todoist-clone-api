import { createTypeormConn } from "./util/createTypeormConn";

export const startApp = async () => {
   await createTypeormConn();
   return {};
};
