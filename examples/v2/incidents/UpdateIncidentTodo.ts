/**
 * Update an incident todo returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentTodo"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

// the "incident" has an "incident_todo"
const INCIDENT_TODO_DATA_ID = process.env.INCIDENT_TODO_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentTodoRequest = {
  body: {
    data: {
      attributes: {
        assignees: ["@test.user@test.com"],
        content: "Restore lost data.",
        completed: "2023-03-06T22:00:00.000000+00:00",
        dueDate: "2023-07-10T05:00:00.000000+00:00",
      },
      type: "incident_todos",
    },
  },
  incidentId: INCIDENT_DATA_ID,
  todoId: INCIDENT_TODO_DATA_ID,
};

apiInstance
  .updateIncidentTodo(params)
  .then((data: v2.IncidentTodoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
