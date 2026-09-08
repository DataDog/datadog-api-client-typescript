/**
 * Investigate a timeseries anomaly returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTimeseriesAnomalyInvestigation"] =
  true;
const apiInstance = new v2.TimeseriesAnomalyInvestigationsApi(configuration);

const params: v2.TimeseriesAnomalyInvestigationsApiCreateTimeseriesAnomalyInvestigationRequest =
  {
    body: {
      data: {
        attributes: {
          requests: [
            {
              formulas: [
                {
                  formula: "anomalies(query1, 'agile', 3)",
                },
              ],
              from: 1754406000000,
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{env:prod} by {service}",
                },
              ],
              to: 1754423940000,
            },
          ],
        },
        type: "timeseries_anomaly_investigation",
      },
    },
  };

apiInstance
  .createTimeseriesAnomalyInvestigation(params)
  .then((data: v2.TimeseriesAnomalyInvestigationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
