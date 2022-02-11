import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params: v1.LogsIndexesApiUpdateLogsIndexOrderRequest = {
  // LogsIndexesOrder | Object containing the new ordered list of index names
  body: {
    indexNames: ["main", "payments", "web"],
  },
};

apiInstance
  .updateLogsIndexOrder(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
