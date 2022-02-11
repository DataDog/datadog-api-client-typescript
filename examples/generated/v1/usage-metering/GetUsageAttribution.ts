import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetUsageAttributionRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month. Maximum of 15 months ago.
  startMonth: new Date("1970-01-01T00:00:00.00Z"),
  // UsageAttributionSupportedMetrics | Comma-separated list of usage types to return, or `*` for all usage types.
  fields: "custom_timeseries_usage",
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month. (optional)
  endMonth: new Date("1970-01-01T00:00:00.00Z"),
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDirection: "desc",
  // UsageAttributionSort | The field to sort by. (optional)
  sortName: "custom_timeseries_usage",
  // boolean | Include child org usage in the response. Defaults to false. (optional)
  includeDescendants: false,
  // number | Number of records to skip before beginning to return. (optional)
  offset: 0,
  // number | Maximum number of records to be returned. (optional)
  limit: 5000,
};

apiInstance
  .getUsageAttribution(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
