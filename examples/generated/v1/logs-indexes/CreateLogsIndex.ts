import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params:v1.LogsIndexesApiCreateLogsIndexRequest = {
  // LogsIndex | Object containing the new index.
  body: {
    dailyLimit: 300000000,
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
    name: "main",
    numRetentionDays: 15,
  },
};

apiInstance.createLogsIndex(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
