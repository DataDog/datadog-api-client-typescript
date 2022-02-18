import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest = {
  // { [key: string]: Array<SLOTimeframe>; } | Delete multiple service level objective objects request body.
  body: {
    key: ["30d"],
  },
};

apiInstance
  .deleteSLOTimeframeInBulk(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
