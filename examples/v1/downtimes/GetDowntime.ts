/**
 * Get a downtime returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "downtime" in the system
const DOWNTIME_ID = parseInt(process.env.DOWNTIME_ID as string);

const params: v1.DowntimesApiGetDowntimeRequest = {
  downtimeId: DOWNTIME_ID,
};

apiInstance
  .getDowntime(params)
  .then((data: v1.Downtime) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
