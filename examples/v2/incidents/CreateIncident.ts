/**
 * Create an incident returns "CREATED" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["createIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "user" in the system
let USER_DATA_ID = process.env.USER_DATA_ID as string;

let params: v2.IncidentsApiCreateIncidentRequest = {
  body: {
    data: {
      type: "incidents",
      attributes: {
        title: "Example-Create_an_incident_returns_CREATED_response",
        customerImpacted: false,
        fields: {
          state: {
            type: "dropdown",
            value: "resolved",
          },
        },
      },
      relationships: {
        commanderUser: {
          data: {
            type: "users",
            id: USER_DATA_ID,
          },
        },
      },
    },
  },
};

apiInstance
  .createIncident(params)
  .then((data: v2.IncidentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
