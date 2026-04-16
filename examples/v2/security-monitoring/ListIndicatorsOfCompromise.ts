/**
 * List indicators of compromise returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIndicatorsOfCompromise"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListIndicatorsOfCompromiseRequest = {
  limit: 1,
};

apiInstance
  .listIndicatorsOfCompromise(params)
  .then((data: v2.IoCExplorerListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
