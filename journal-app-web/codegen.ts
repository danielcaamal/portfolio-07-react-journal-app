
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "./src/**/graphql/query.ts",
  generates: {
    "src/gql/graphql.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      // config: {
      //   withHooks: true,
      // }
    }
  }
};

export default config;
