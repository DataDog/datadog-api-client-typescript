/**
 * Create a Cost Monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example Monitor",
    type: "cost alert",
    query: `formula("exclude_null(query1)").last("7d").anomaly(direction="above", threshold=10) >= 5`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplemonitor", "env:ci"],
    priority: 3,
    options: {
      thresholds: {
        critical: 5,
        warning: 3,
      },
      variables: [
        {
          dataSource: "cloud_cost",
          query:
            "sum:aws.cost.net.amortized.shared.resources.allocated{aws_product IN (amplify ,athena, backup, bedrock ) } by {aws_product}.rollup(sum, 86400)",
          name: "query1",
          aggregator: "sum",
        },
      ],
      includeTags: true,
    },
  },
};

apiInstance
  .createMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
