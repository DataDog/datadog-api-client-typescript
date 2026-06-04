/**
 * Create an SLO correction with slo_query returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

const params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Scheduled Maintenance",
          description: "Example-Service-Level-Objective-Correction",
          end: Math.round(
            new Date(new Date().getTime() + 1 * 3600 * 1000).getTime() / 1000
          ),
          sloQuery: "env:prod service:checkout",
          start: Math.round(new Date().getTime() / 1000),
          timezone: "UTC",
        },
        type: "correction",
      },
    },
  };

apiInstance
  .createSLOCorrection(params)
  .then((data: v1.SLOCorrectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
