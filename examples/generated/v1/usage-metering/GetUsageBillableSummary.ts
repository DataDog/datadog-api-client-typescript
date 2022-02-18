import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetUsageBillableSummaryRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage starting this month. (optional)
  month: new Date("1970-01-01T00:00:00.00Z"),
};

apiInstance
  .getUsageBillableSummary(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
