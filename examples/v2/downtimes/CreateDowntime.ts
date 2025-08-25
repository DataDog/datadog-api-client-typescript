/**
 * Schedule a downtime returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

const params: v2.DowntimesApiCreateDowntimeRequest = {
  body: {
    data: {
      attributes: {
        message: "dark forest",
        monitorIdentifier: {
          monitorTags: ["cat:hat"],
        },
        scope: "test:exampledowntime",
        schedule: {
          start: undefined,
        },
      },
      type: "downtime",
    },
  },
};

apiInstance
  .createDowntime(params)
  .then((data: v2.DowntimeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
