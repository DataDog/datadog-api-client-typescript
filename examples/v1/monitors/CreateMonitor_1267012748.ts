/**
 * Create a Data Jobs duration monitor returns "OK" response
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
    query: `formula("job_duration(run_query)").detection(anomaly).by(name,workspace_name,entity_id) > 0`,
    message: "Data jobs duration alert triggered",
    tags: ["test:examplemonitor", "env:ci"],
    options: {
      variables: [
        {
          name: "run_query",
          dataSource: "data_quality_metrics",
          schemaVersion: "0.0.1",
          measure: "duration",
          filter: "search for databricks_job",
          runFilter: "env:prod",
          groupBy: ["name", "workspace_name", "entity_id"],
          monitorOptions: {
            detectionType: "anomaly",
            consecutiveRuns: 2,
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
