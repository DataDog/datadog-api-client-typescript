/**
 * Send an incident event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiCreateDORAIncidentRequest = {
  body: {
    data: {
      attributes: {
        customTags: ["language:java", "department:engineering"],
        env: "staging",
        finishedAt: 1693491984000000000,
        git: {
          commitSha: "66adc9350f2cc9b250b69abddab733dd55e1a588",
          repositoryUrl: "https://github.com/organization/example-repository",
        },
        name: "Webserver is down failing all requests.",
        services: ["shopist"],
        severity: "High",
        startedAt: 1693491974000000000,
        team: "backend",
        version: "v1.12.07",
      },
    },
  },
};

apiInstance
  .createDORAIncident(params)
  .then((data: v2.DORAFailureResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
