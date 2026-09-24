/**
 * List Model Lab project facet values returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listModelLabProjectFacetValues"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiListModelLabProjectFacetValuesRequest = {
  facetType: "tag",
  facetName: "model",
};

apiInstance
  .listModelLabProjectFacetValues(params)
  .then((data: v2.ModelLabFacetValuesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
