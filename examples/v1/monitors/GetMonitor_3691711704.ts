/**
 * Get a synthetics monitor's details
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "synthetics_api_test" in the system
let SYNTHETICS_API_TEST_MONITOR_ID = parseInt(
  process.env.SYNTHETICS_API_TEST_MONITOR_ID as string
);

let params: v1.MonitorsApiGetMonitorRequest = {
  monitorId: SYNTHETICS_API_TEST_MONITOR_ID,
};

apiInstance
  .getMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
