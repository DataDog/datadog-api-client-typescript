/**
 * List vulnerable assets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listVulnerableAssets"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListVulnerableAssetsRequest = {
  filterType: "Host",
  filterRepositoryUrl: "github.com/datadog/dd-go",
  filterRisksInProduction: true,
};

apiInstance
  .listVulnerableAssets(params)
  .then((data: v2.ListVulnerableAssetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
