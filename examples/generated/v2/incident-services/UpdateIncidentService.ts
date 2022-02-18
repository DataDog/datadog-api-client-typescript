import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params: v2.IncidentServicesApiUpdateIncidentServiceRequest = {
  // string | The ID of the incident service.
  serviceId: "service_id_example",
  // IncidentServiceUpdateRequest | Incident Service Payload.
  body: {
    data: {
      attributes: {
        name: "an example service name",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "services",
    },
  },
};

apiInstance
  .updateIncidentService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
