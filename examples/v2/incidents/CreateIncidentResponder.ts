/**
 * Create an incident responder returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createIncidentResponder"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentResponderRequest = {
  body: {
    data: {
      relationships: {
        user: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
      },
      type: "incident_responders",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentResponder(params)
  .then((data: v2.IncidentResponderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
