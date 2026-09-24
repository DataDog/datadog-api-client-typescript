/**
 * List unified host facets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listCSMUnifiedHostFacets"] = true;
const apiInstance = new v2.CSMSettingsApi(configuration);

apiInstance
  .listCSMUnifiedHostFacets()
  .then((data: v2.CsmUnifiedHostFacetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
