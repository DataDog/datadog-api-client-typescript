import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params: v2.IncidentsApiDeleteIncidentRequest = {
  // string | The UUID of the incident.
  incidentId: "incident_id_example",
};

apiInstance
  .deleteIncident(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
