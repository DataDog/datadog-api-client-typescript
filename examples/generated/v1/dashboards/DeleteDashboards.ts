import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params:v1.DashboardsApiDeleteDashboardsRequest = {
  // DashboardBulkDeleteRequest | Delete dashboards request body.
  body: {
    data: [
      {
        id: "123-abc-456",
        type: "dashboard",
      },
    ],
  },
};

apiInstance.deleteDashboards(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
