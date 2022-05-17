/**
 * Update an SLO correction returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v1.createConfiguration();
||||||| parent of 3bc19178c (Fix examples)
const configuration = v1.createConfiguration();
configuration.unstableOperations["updateSLOCorrection"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["updateSLOCorrection"] = true;
>>>>>>> 3bc19178c (Fix examples)
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "correction" for "slo"
const CORRECTION_DATA_ID = process.env.CORRECTION_DATA_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest =
  {
    body: {
      data: {
        attributes: {
          category: "Deployment",
          description: "Example-Update_an_SLO_correction_returns_OK_response",
          end:
            new Date(new Date().getTime() / 1000 + 1 * 3600).getTime() / 1000,
          start: new Date().getTime() / 1000,
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
