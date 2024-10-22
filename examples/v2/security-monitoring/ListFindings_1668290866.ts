/**
 * List findings with detection_type query param returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListFindingsRequest = {
  filterVulnerabilityType: ["misconfiguration", "attack_path"],
};

apiInstance
  .listFindings(params)
  .then((data: v2.ListFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
