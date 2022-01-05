/**
 * Delete an SLO returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
let SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;



let params: v1.ServiceLevelObjectivesApiDeleteSLORequest = {
  sloId: SLO_DATA_0_ID,

};

apiInstance
  .deleteSLO(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));