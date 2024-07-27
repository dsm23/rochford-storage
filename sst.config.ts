import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "rochford-storage",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        buildCommand: "pnpm run build",
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
