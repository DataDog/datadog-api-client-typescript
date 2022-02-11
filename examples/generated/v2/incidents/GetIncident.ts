import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params: v2.IncidentsApiGetIncidentRequest = {
  // string | The UUID of the incident.
  incidentId: "incident_id_example",
  // Array<IncidentRelatedObject> | Specifies which types of related objects should be included in the response. (optional)
  include: ["users"],
};

apiInstance
  .getIncident(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
