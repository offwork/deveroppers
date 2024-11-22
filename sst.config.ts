/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "deveroppers",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("DeveroppersWebBucket", {
      access: "public",
    });
    new sst.aws.Astro("DeveroppersWeb", { link: [bucket] });
  },
});
