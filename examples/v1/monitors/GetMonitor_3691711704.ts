/**
 * Get a synthetics monitor's details
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "synthetics_api_test" in the system
const SYNTHETICS_API_TEST_MONITOR_ID = parseInt(
  process.env.SYNTHETICS_API_TEST_MONITOR_ID as string
);

const params: v1.MonitorsApiGetMonitorRequest = {
  monitorId: SYNTHETICS_API_TEST_MONITOR_ID,
};

apiInstance
  .getMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
