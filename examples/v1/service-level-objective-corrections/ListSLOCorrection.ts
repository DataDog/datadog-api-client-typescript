/**
 * Get all SLO corrections returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

const params: v1.ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest = {
  offset: 1,
  limit: 1,
};

apiInstance
  .listSLOCorrection(params)
  .then((data: v1.SLOCorrectionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
