import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params: v2.IncidentsApiUpdateIncidentRequest = {
  // string | The UUID of the incident.
  incidentId: "incident_id_example",
  // IncidentUpdateRequest | Incident Payload.
  body: {
    data: {
      attributes: {
        customerImpactEnd: new Date("1970-01-01T00:00:00.00Z"),
        customerImpactScope: "Example customer impact scope",
        customerImpactStart: new Date("1970-01-01T00:00:00.00Z"),
        customerImpacted: false,
        detected: new Date("1970-01-01T00:00:00.00Z"),
        fields: {
          key: {
            type: "dropdown",
            value: "SEV-1",
          },
        },
        notificationHandles: [
          {
            displayName: "Jane Doe",
            handle: "@test.user@test.com",
          },
        ],
        resolved: new Date("1970-01-01T00:00:00.00Z"),
        title: "A test incident title",
      },
      id: "00000000-0000-0000-0000-000000000000",
      relationships: {
        commanderUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        createdByUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        integrations: {
          data: [
            {
              id: "00000000-0000-0000-0000-000000000000",
              type: "incident_integrations",
            },
          ],
        },
        lastModifiedByUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        postmortem: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_postmortems",
          },
        },
      },
      type: "incidents",
    },
  },
};

apiInstance
  .updateIncident(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
