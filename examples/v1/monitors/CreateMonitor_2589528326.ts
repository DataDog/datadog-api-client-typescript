/**
 * Create a Data Jobs monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "data-jobs alert",
    query: `formula("failed_runs(run_query)").by(job_name,workspace_name).last(10d) > 0`,
    message: "Data jobs alert triggered",
    tags: ["test:examplemonitor", "env:ci"],
    options: {
      thresholds: {
        critical: 0,
      },
      variables: [
        {
          name: "run_query",
          jobsQuery: "job_name:*",
          jobType: "databricks.job",
          queryDialect: "metric",
        },
      ],
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
