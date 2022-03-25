/**
 * Get an SLO's details returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

const params: v1.ServiceLevelObjectivesApiGetSLORequest = {
  sloId: SLO_DATA_0_ID,
};

apiInstance
  .getSLO(params)
  .then((data: v1.SLOResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
