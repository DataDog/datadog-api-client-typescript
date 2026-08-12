/**
 * Get a Bits AI SRE investigation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getInvestigation"] = true;
const apiInstance = new v2.BitsAISREApi(configuration);

const params: v2.BitsAISREApiGetInvestigationRequest = {
  id: "id",
};

apiInstance
  .getInvestigation(params)
  .then((data: v2.GetInvestigationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
