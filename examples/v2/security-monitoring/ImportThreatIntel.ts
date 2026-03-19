/**
 * Import threat intelligence feed returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.importThreatIntel"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiImportThreatIntelRequest = {
  tiVendor: "ti_vendor",
  tiIndicator: "ip_address",
};

apiInstance
  .importThreatIntel(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
