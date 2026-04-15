/**
 * List instrumented pods for a cluster returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetInstrumentedPods"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiListFleetInstrumentedPodsRequest = {
  clusterName: "cluster_name",
};

apiInstance
  .listFleetInstrumentedPods(params)
  .then((data: v2.FleetInstrumentedPodsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
