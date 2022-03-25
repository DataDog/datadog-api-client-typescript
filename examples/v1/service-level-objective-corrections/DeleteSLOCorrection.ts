/**
 * Delete an SLO correction returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["deleteSLOCorrection"] = true;
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

const params: v1.ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest =
  {
    sloCorrectionId: "slo_correction_id",
  };

apiInstance
  .deleteSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
