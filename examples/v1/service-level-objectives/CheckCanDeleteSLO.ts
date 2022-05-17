/**
 * Check if SLOs can be safely deleted returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

const params: v1.ServiceLevelObjectivesApiCheckCanDeleteSLORequest = {
  ids: "ids",
};

apiInstance
  .checkCanDeleteSLO(params)
  .then((data: v1.CheckCanDeleteSLOResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
