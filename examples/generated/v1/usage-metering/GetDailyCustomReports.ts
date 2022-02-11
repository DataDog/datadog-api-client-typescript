import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetDailyCustomReportsRequest = {
  // number | The number of files to return in the response. `[default=60]`. (optional)
  pageSize: 1,
  // number | The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`. (optional)
  pageNumber: 1,
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDir: "desc",
  // UsageSort | The field to sort by: `[computed_on, size, start_date, end_date]`. (optional)
  sort: "start_date",
};

apiInstance.getDailyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
