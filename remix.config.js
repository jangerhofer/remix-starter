/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "src",
  assetsBuildDirectory: "public/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
};
