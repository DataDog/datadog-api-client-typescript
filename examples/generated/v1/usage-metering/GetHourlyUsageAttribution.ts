import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params: v1.UsageMeteringApiGetHourlyUsageAttributionRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date("1970-01-01T00:00:00.00Z"),
  // HourlyUsageAttributionUsageType | Usage type to retrieve.
  usageType: "api_usage",
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date("1970-01-01T00:00:00.00Z"),
  // string | List following results with a next_record_id provided in the previous query. (optional)
  nextRecordId: "next_record_id_example",
  // string | Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags. (optional)
  tagBreakdownKeys: "tag_breakdown_keys_example",
};

apiInstance
  .getHourlyUsageAttribution(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
