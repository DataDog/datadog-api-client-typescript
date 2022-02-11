import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiCreateDashboardListRequest = {
  // DashboardList | Create a dashboard list request body.
  body: {
    name: "My Dashboard",
  },
};

apiInstance.createDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
