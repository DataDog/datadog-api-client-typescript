/**
 * Synthetics: Edit a Network Path test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiUpdateSyntheticsNetworkTestRequest = {
  body: {
    data: {
      attributes: {
        config: {
          assertions: [
            {
              operator: "lessThan",
              property: "avg",
              target: 500,
              type: "latency",
            },
          ],
          request: {
            e2eQueries: 50,
            host: "",
            maxTtl: 30,
            port: 443,
            tcpMethod: "prefer_sack",
            tracerouteQueries: 3,
          },
        },
        locations: ["aws:us-east-1", "agent:my-agent-name"],
        message: "Network Path test notification",
        name: "Example Network Path test",
        options: {
          monitorOptions: {
            notificationPresetName: "show_all",
          },
          restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
          retry: {},
          scheduling: {
            timeframes: [
              {
                day: 1,
                from: "07:00",
                to: "16:00",
              },
              {
                day: 3,
                from: "07:00",
                to: "16:00",
              },
            ],
            timezone: "America/New_York",
          },
        },
        status: "live",
        subtype: "tcp",
        tags: ["env:production"],
        type: "network",
      },
      type: "network",
    },
  },
  publicId: "public_id",
};

apiInstance
  .updateSyntheticsNetworkTest(params)
  .then((data: v2.SyntheticsNetworkTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
