import path from "path";

const absoluteIndexFile = path.resolve(__dirname, "../src/views/index.html");

/** Add paths here to access from anywhere in application. */
export default {
  absoluteIndexFile: absoluteIndexFile,
  exampleFile: path.resolve(__dirname, "../src/views/example.html"),
  indexFile: process.env.INDEX_FILE || absoluteIndexFile,
};
