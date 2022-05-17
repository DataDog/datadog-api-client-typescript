/**
 * Get an SLO correction for an SLO returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v1.createConfiguration();
||||||| parent of 3bc19178c (Fix examples)
const configuration = v1.createConfiguration();
configuration.unstableOperations["getSLOCorrection"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["getSLOCorrection"] = true;
>>>>>>> 3bc19178c (Fix examples)
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "correction" for "slo"
const CORRECTION_DATA_ID = process.env.CORRECTION_DATA_ID as string;

const params: v1.ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest = {
  sloCorrectionId: CORRECTION_DATA_ID,
};

apiInstance
  .getSLOCorrection(params)
  .then((data: v1.SLOCorrectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
