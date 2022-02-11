import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params: v1.LogsIndexesApiUpdateLogsIndexRequest = {
  // string | Name of the log index.
  name: "name_example",
  // LogsIndexUpdateRequest | Object containing the new `LogsIndexUpdateRequest`.
  body: {
    dailyLimit: 1,
    disableDailyLimit: true,
    exclusionFilters: [
      {
        filter: {
          query: "*",
          sampleRate: 1.0,
        },
        isEnabled: true,
        name: "payment",
      },
    ],
    filter: {
      query: "source:python",
    },
    numRetentionDays: 1,
  },
};

apiInstance
  .updateLogsIndex(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
