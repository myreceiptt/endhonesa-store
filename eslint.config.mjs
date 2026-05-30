import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
