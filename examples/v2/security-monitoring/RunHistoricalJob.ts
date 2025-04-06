/**
 * Run a historical job returns "Status created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiRunHistoricalJobRequest = {
  body: {
    data: {
      type: "historicalDetectionsJobCreate",
      attributes: {
        jobDefinition: {
          type: "log_detection",
          name: "Excessive number of failed attempts.",
          queries: [
            {
              query: "source:non_existing_src_weekend",
              aggregation: "count",
              groupByFields: [],
              distinctFields: [],
            },
          ],
          cases: [
            {
              name: "Condition 1",
              status: "info",
              notifications: [],
              condition: "a > 1",
            },
          ],
          options: {
            keepAlive: 3600,
            maxSignalDuration: 86400,
            evaluationWindow: 900,
          },
          message: "A large number of failed login attempts.",
          tags: [],
          from: 1730387522611,
          to: 1730387532611,
          index: "main",
        },
      },
    },
  },
};

apiInstance
  .runHistoricalJob(params)
  .then((data: v2.JobCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
