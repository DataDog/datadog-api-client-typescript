/**
 * Get all Workload Protection policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

apiInstance
  .listCSMThreatsAgentPolicies()
  .then((data: v2.CloudWorkloadSecurityAgentPoliciesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
