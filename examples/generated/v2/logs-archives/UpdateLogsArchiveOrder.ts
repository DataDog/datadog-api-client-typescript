import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params: v2.LogsArchivesApiUpdateLogsArchiveOrderRequest = {
  // LogsArchiveOrder | An object containing the new ordered list of archive IDs.
  body: {
    data: {
      attributes: {
        archiveIds: [
          "a2zcMylnM4OCHpYusxIi1g",
          "a2zcMylnM4OCHpYusxIi2g",
          "a2zcMylnM4OCHpYusxIi3g",
        ],
      },
      type: "archive_order",
    },
  },
};

apiInstance
  .updateLogsArchiveOrder(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
