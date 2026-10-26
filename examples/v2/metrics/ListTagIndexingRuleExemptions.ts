/**
 * List tag indexing rule exemptions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listTagIndexingRuleExemptions"] = true;
const apiInstance = new v2.MetricsApi(configuration);

apiInstance
  .listTagIndexingRuleExemptions()
  .then((data: v2.TagIndexingRuleExemptionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
