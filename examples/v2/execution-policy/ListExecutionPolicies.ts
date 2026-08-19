/**
 * List execution policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listExecutionPolicies"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

apiInstance
  .listExecutionPolicies()
  .then((data: v2.ExecutionPolicyListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
