import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetMonthlyUsageAttributionRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month. Maximum of 15 months ago.
  startMonth: new Date('1970-01-01T00:00:00.00Z'),
  // MonthlyUsageAttributionSupportedMetrics | Comma-separated list of usage types to return, or `*` for all usage types.
  fields: "api_usage",
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month. (optional)
  endMonth: new Date('1970-01-01T00:00:00.00Z'),
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDirection: "desc",
  // MonthlyUsageAttributionSupportedMetrics | The field to sort by. (optional)
  sortName: "api_usage",
  // string | Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags. (optional)
  tagBreakdownKeys: "tag_breakdown_keys_example",
  // string | List following results with a next_record_id provided in the previous query. (optional)
  nextRecordId: "next_record_id_example",
};

apiInstance.getMonthlyUsageAttribution(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
