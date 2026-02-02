/**
 * List tag policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listTagPolicies"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

apiInstance
  .listTagPolicies()
  .then((data: v2.TagPoliciesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
