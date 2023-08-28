/**
 * Get all SLO corrections returns "OK" response with pagination
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

const params: v1.ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest = {
  limit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listSLOCorrectionWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
