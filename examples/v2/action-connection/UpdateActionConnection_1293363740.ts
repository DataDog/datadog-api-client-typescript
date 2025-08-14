/**
 * Update an existing Action Connection with HTTPBasicAuth returns "Successfully updated Action Connection" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiUpdateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "HTTP Basic Auth Updated",
        integration: {
          type: "HTTP",
          baseUrl: "https://api.updated.com",
          credentials: {
            type: "HTTPBasicAuth",
            username: "updated-user",
            password: "updated-password",
          },
        },
      },
    },
  },
  connectionId: "cb460d51-3c88-4e87-adac-d47131d0423d",
};

apiInstance
  .updateActionConnection(params)
  .then((data: v2.UpdateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
