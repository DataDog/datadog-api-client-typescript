/**
 * Delete an incident todo returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentTodo"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

// the "incident" has an "incident_todo"
const INCIDENT_TODO_DATA_ID = process.env.INCIDENT_TODO_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentTodoRequest = {
  incidentId: INCIDENT_DATA_ID,
  todoId: INCIDENT_TODO_DATA_ID,
};

apiInstance
  .deleteIncidentTodo(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
