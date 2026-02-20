/**
 * Create a Network Path test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiCreateSyntheticsNetworkTestRequest = {
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
            host: "example.com",
            port: 443,
            tcpMethod: "prefer_sack",
            maxTtl: 30,
            e2eQueries: 50,
            tracerouteQueries: 3,
          },
        },
        locations: ["aws:us-east-1", "agent:my-agent-name"],
        message: "Network Path test notification",
        name: "Example Network Path test",
        options: {
          tickEvery: 60,
        },
        status: "live",
        subtype: "tcp",
        tags: ["env:production"],
        type: "network",
      },
      type: "network",
    },
  },
};

apiInstance
  .createSyntheticsNetworkTest(params)
  .then((data: v2.SyntheticsNetworkTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
