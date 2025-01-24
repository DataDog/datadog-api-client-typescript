/**
 * Get an existing Action Connection returns "Successfully get Action Connection" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiGetActionConnectionRequest = {
  connectionId: "cb460d51-3c88-4e87-adac-d47131d0423d",
};

apiInstance
  .getActionConnection(params)
  .then((data: v2.GetActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
