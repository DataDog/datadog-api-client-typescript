/**
 * Get all SLO corrections returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["listSLOCorrection"] = true;
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

apiInstance
  .listSLOCorrection()
  .then((data: v1.SLOCorrectionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
