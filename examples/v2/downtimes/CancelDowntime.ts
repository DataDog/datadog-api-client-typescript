/**
 * Cancel a downtime returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

// there is a valid "downtime_v2" in the system
const DOWNTIME_V2_DATA_ID = process.env.DOWNTIME_V2_DATA_ID as string;

const params: v2.DowntimesApiCancelDowntimeRequest = {
  downtimeId: DOWNTIME_V2_DATA_ID,
};

apiInstance
  .cancelDowntime(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
