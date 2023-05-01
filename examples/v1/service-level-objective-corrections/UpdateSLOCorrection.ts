/**
 * Update an SLO correction returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "correction" for "slo"
const CORRECTION_DATA_ID = process.env.CORRECTION_DATA_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Deployment",
          description: "Example-Service-Level-Objective-Correction",
          end: Math.round(
            new Date(new Date().getTime() + 1 * 3600 * 1000).getTime() / 1000
          ),
          start: Math.round(new Date().getTime() / 1000),
          timezone: "UTC",
        },
        type: "correction",
      },
    },
    sloCorrectionId: CORRECTION_DATA_ID,
  };

apiInstance
  .updateSLOCorrection(params)
  .then((data: v1.SLOCorrectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
