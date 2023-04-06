/**
 * Create an SLO correction with rrule returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Scheduled Maintenance",
          description: "Example-Service-Level-Objective-Correction",
          sloId: SLO_DATA_0_ID,
          start: Math.round(new Date().getTime() / 1000),
          duration: 3600,
          rrule: "FREQ=DAILY;INTERVAL=10;COUNT=5",
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
