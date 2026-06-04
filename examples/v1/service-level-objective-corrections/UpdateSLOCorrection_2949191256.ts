/**
 * Update an SLO correction with slo_query returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "correction_with_query" in the system
const CORRECTION_WITH_QUERY_DATA_ID = process.env
  .CORRECTION_WITH_QUERY_DATA_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Scheduled Maintenance",
          description: "Example-Service-Level-Objective-Correction",
          end: Math.round(
            new Date(new Date().getTime() + 1 * 3600 * 1000).getTime() / 1000
          ),
          sloQuery: "env:staging service:checkout",
          start: Math.round(new Date().getTime() / 1000),
          timezone: "UTC",
        },
        type: "correction",
      },
    },
    sloCorrectionId: CORRECTION_WITH_QUERY_DATA_ID,
  };

apiInstance
  .updateSLOCorrection(params)
  .then((data: v1.SLOCorrectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
