import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiGetSLORequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // boolean | Get the IDs of SLO monitors that reference this SLO. (optional)
  withConfiguredAlertIds: true,
};

apiInstance
  .getSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
