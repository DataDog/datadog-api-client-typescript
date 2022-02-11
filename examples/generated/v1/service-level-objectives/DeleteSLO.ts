import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiDeleteSLORequest = {
  // string | The ID of the service level objective.
  sloId: "slo_id_example",
  // string | Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor). (optional)
  force: "force_example",
};

apiInstance
  .deleteSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
