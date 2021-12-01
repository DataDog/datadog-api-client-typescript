/**
 * Update a downtime returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "downtime" in the system
let DOWNTIME_ID = parseInt(process.env.DOWNTIME_ID as string);

let params: v1.DowntimesApiUpdateDowntimeRequest = {
  body: {
    message: "Example-Update_a_downtime_returns_OK_response-updated",
  },
  downtimeId: DOWNTIME_ID,
};

apiInstance
  .updateDowntime(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
