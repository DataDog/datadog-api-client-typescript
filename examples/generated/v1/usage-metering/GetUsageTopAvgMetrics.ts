import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageTopAvgMetricsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both) (optional)
  month: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both) (optional)
  day: new Date('1970-01-01T00:00:00.00Z'),
  // Array<string> | Comma-separated list of metric names. (optional)
  names: [
    "names_example",
  ],
  // number | Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified. (optional)
  limit: 500,
  // string | List following results with a next_record_id provided in the previous query. (optional)
  nextRecordId: "next_record_id_example",
};

apiInstance.getUsageTopAvgMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
