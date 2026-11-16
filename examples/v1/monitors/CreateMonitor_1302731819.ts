/**
 * Create a Data Jobs monitor with the aastra query dialect returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "data-jobs alert",
    query: `formula("failed_runs(run_query)").by(name,workspace_name,entity_id).last(1d) > 0`,
    message: "Data jobs alert triggered",
    tags: ["test:examplemonitor", "env:ci"],
    options: {
      thresholds: {
        critical: 0,
      },
      variables: [
        {
          name: "run_query",
          jobsQuery: "search for databricks_job",
          jobType: "databricks.job",
          queryDialect: "aastra",
          runFilter: "env:prod",
          monitorOptions: {
            alertOnEveryFailure: true,
          },
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
