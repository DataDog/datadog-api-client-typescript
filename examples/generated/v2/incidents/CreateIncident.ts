import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiCreateIncidentRequest = {
  // IncidentCreateRequest | Incident payload.
  body: {
    data: {
      attributes: {
        customerImpacted: false,
        fields: {
          "key": {
    type: "dropdown",
    value: "SEV-1",
  },
        },
        initialCells: [
          {
    cellType: "markdown",
    content: {
      content: "An example timeline cell message.",
    },
    important: false,
  },
        ],
        notificationHandles: [
          {
            displayName: "Jane Doe",
            handle: "@test.user@test.com",
          },
        ],
        title: "A test incident title",
      },
      relationships: {
        commander: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
      },
      type: "incidents",
    },
  },
};

apiInstance.createIncident(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
