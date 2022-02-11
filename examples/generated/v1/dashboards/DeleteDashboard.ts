import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params:v1.DashboardsApiDeleteDashboardRequest = {
  // string | The ID of the dashboard.
  dashboardId: "dashboard_id_example",
};

apiInstance.deleteDashboard(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
