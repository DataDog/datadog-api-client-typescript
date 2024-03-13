/**
 * Get all CSM Threats Agent rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCSMThreatsAgentRules"] = true;
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .listCSMThreatsAgentRules()
  .then((data: v2.CloudWorkloadSecurityAgentRulesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
