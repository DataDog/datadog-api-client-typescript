/**
 * List feature flags does not partially match keys
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiListFeatureFlagsRequest = {
  key: "list-a-",
  tags: ["list-test:example-feature-flag"],
};

apiInstance
  .listFeatureFlags(params)
  .then((data: v2.ListFeatureFlagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
