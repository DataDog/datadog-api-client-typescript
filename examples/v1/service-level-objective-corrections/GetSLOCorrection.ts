/**
 * Get an SLO correction for an SLO returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getSLOCorrection"] = true;
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

// there is a valid "correction" for "slo"
let CORRECTION_DATA_ID = process.env.CORRECTION_DATA_ID as string;

let params: v1.ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest = {
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
