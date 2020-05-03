exports.config = {
  projectRoot: "./src",
  projectName: "peekaschedule",
  outDir: './docs',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
