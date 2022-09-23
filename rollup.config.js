import path from "path";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

export default {
  input: {
    index: "src/components/index.js",
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    alias({
      resolve: [".js", ".jsx"],
    }),
    json(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**", "**/*.stories.js", "**/*.test.js"],
      presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      minimize: true,
    }),
    terser(),
  ],
};
