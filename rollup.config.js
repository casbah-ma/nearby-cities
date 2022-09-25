import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: {
    index: "src/components/NearbyCities",
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
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**", "**/*.stories.js", "**/*.test.js"],
      presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
    }),
    copy({
      targets: [
        { src: "package.json", dest: "dist" },
        { src: "README.md", dest: "dist" },
      ],
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      minimize: true,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
