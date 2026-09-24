/**
 * Get a Bits AI investigation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getInvestigation"] = true;
const apiInstance = new v2.BitsAIApi(configuration);

const params: v2.BitsAIApiGetInvestigationRequest = {
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
