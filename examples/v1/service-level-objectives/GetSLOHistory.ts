/**
 * Get an SLO's history returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
configuration.unstableOperations["getSLOHistory"] = true;
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

// there is a valid "slo" in the system
let SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

let params: v1.ServiceLevelObjectivesApiGetSLOHistoryRequest = {
  sloId: SLO_DATA_0_ID,
  fromTs: new Date(new Date().getTime() / 1000 + -1 * 86400).getTime() / 1000,
  toTs: new Date().getTime() / 1000,
};

apiInstance
  .getSLOHistory(params)
  .then((data: v1.SLOHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
