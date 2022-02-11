import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params: v2.IncidentServicesApiCreateIncidentServiceRequest = {
  // IncidentServiceCreateRequest | Incident Service Payload.
  body: {
    data: {
      attributes: {
        name: "an example service name",
      },
      type: "services",
    },
  },
};

apiInstance
  .createIncidentService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
