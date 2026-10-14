/**
 * List feature flags gives page parameters precedence over aliases
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
  limit: 2,
  offset: 1,
  tags: ["list-test:example-feature-flag"],
  sort: "name",
  pageLimit: 1,
  pageOffset: 0,
};

apiInstance
  .listFeatureFlags(params)
  .then((data: v2.ListFeatureFlagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
