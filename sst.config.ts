/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "deveroppers",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: input?.stage === "staging" ? "staging" : "default"
        }
      }
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("DeveroppersBucket", {
      access: "public",
    });
    new sst.aws.Astro("DeveroppersWeb", { link: [bucket] });
  },
});
