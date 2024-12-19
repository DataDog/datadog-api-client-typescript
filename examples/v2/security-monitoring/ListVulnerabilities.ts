/**
 * List vulnerabilities returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listVulnerabilities"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListVulnerabilitiesRequest = {
  filterType: "CommandInjection",
  filterTool: "IAST",
  filterAssetRepositoryUrl: "github.com/datadog/dd-go",
};

apiInstance
  .listVulnerabilities(params)
  .then((data: v2.ListVulnerabilitiesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
