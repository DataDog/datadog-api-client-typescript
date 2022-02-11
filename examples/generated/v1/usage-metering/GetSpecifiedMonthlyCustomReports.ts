import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest = {
  // string | Date of the report in the format `YYYY-MM-DD`.
  reportId: "report_id_example",
};

apiInstance.getSpecifiedMonthlyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
