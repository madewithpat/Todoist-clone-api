import { IResolvers } from "graphql-tools";
// May switch to this interface instead
// import { IResolverMap } from './types/graphql-utils';

export const resolvers: IResolvers = {
   Query: {
      hello: (_, { name }: GQL.IHelloOnQueryArguments) =>
         `Hello ${name || "World"}`
   },
   Mutation: {
      register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
         return email + password;
      }
   }
};
