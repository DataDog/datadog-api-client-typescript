/**
 * Update a downtime returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

// there is a valid "downtime_v2" in the system
const DOWNTIME_V2_DATA_ID = process.env.DOWNTIME_V2_DATA_ID as string;

const params: v2.DowntimesApiUpdateDowntimeRequest = {
  body: {
    data: {
      attributes: {
        message: "light speed",
      },
      id: DOWNTIME_V2_DATA_ID,
      type: "downtime",
    },
  },
  downtimeId: DOWNTIME_V2_DATA_ID,
};

apiInstance
  .updateDowntime(params)
  .then((data: v2.DowntimeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
