/**
 * Get SLO status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSloStatus"] = true;
const apiInstance = new v2.ServiceLevelObjectivesApi(configuration);

const params: v2.ServiceLevelObjectivesApiGetSloStatusRequest = {
  sloId: "00000000-0000-0000-0000-000000000000",
  fromTs: 1690901870,
  toTs: 1706803070,
};

apiInstance
  .getSloStatus(params)
  .then((data: v2.SloStatusResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
