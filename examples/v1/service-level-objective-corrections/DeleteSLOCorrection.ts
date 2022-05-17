/**
 * Delete an SLO correction returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v1.createConfiguration();
||||||| parent of 3bc19178c (Fix examples)
const configuration = v1.createConfiguration();
configuration.unstableOperations["deleteSLOCorrection"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["deleteSLOCorrection"] = true;
>>>>>>> 3bc19178c (Fix examples)
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
