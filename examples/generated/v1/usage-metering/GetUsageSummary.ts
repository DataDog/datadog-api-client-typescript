import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetUsageSummaryRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month. Maximum of 15 months ago.
  startMonth: new Date("1970-01-01T00:00:00.00Z"),
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month. (optional)
  endMonth: new Date("1970-01-01T00:00:00.00Z"),
  // boolean | Include usage summaries for each sub-org. (optional)
  includeOrgDetails: true,
};

apiInstance
  .getUsageSummary(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
