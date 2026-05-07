/**
 * List custom allocation rule statuses returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCustomAllocationRulesStatus"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

apiInstance
  .listCustomAllocationRulesStatus()
  .then((data: v2.CustomAllocationRuleStatusResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
