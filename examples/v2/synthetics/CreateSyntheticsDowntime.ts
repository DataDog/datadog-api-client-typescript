/**
 * Create a Synthetics downtime returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiCreateSyntheticsDowntimeRequest = {
  body: {
    data: {
      attributes: {
        isEnabled: true,
        name: "Weekly maintenance",
        testIds: ["abc-def-123"],
        timeSlots: [
          {
            duration: 3600,
            start: {
              day: 15,
              hour: 10,
              minute: 30,
              month: 1,
              year: 2024,
            },
            timezone: "Europe/Paris",
          },
        ],
      },
      type: "downtime",
    },
  },
};

apiInstance
  .createSyntheticsDowntime(params)
  .then((data: v2.SyntheticsDowntimeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
