exports.config = {
  projectRoot: "./src",
  projectName: "peekaschedule",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};