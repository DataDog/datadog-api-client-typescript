import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiGetDashboardListRequest = {
  // number | ID of the dashboard list to fetch.
  listId: 1,
};

apiInstance.getDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
