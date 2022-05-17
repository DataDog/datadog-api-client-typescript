/**
 * Get Corrections For an SLO returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v1.createConfiguration();
||||||| parent of 3bc19178c (Fix examples)
const configuration = v1.createConfiguration();
configuration.unstableOperations["getSLOCorrections"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["getSLOCorrections"] = true;
>>>>>>> 3bc19178c (Fix examples)
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

const params: v1.ServiceLevelObjectivesApiGetSLOCorrectionsRequest = {
  sloId: SLO_DATA_0_ID,
};

apiInstance
  .getSLOCorrections(params)
  .then((data: v1.SLOCorrectionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
