/**
 * Create or update an indicator triage state returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIoCTriageState"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateIoCTriageStateRequest = {
  body: {
    data: {
      attributes: {
        indicator: "192.0.2.1",
        triageState: "reviewed",
      },
      type: "ioc_triage_state",
    },
  },
};

apiInstance
  .createIoCTriageState(params)
  .then((data: v2.IoCTriageWriteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
