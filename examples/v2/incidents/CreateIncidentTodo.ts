/**
 * Create an incident todo returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentTodo"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentTodoRequest = {
  body: {
    data: {
      attributes: {
        assignees: ["@test.user@test.com"],
        content: "Restore lost data.",
      },
      type: "incident_todos",
    },
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .createIncidentTodo(params)
  .then((data: v2.IncidentTodoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
