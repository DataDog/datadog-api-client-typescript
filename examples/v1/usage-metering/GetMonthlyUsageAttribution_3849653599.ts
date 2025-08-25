/**
 * Paginate monthly usage attribution
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

// there is a valid "monthly_usage_attribution" response
const MONTHLY_USAGE_ATTRIBUTION_METADATA_PAGINATION_NEXT_RECORD_ID = process.env
  .MONTHLY_USAGE_ATTRIBUTION_METADATA_PAGINATION_NEXT_RECORD_ID as string;

const params: v1.UsageMeteringApiGetMonthlyUsageAttributionRequest = {
  startMonth: new Date(new Date().getTime() + -3 * 86400 * 1000),
  fields: "infra_host_usage",
  nextRecordId: MONTHLY_USAGE_ATTRIBUTION_METADATA_PAGINATION_NEXT_RECORD_ID,
};

apiInstance
  .getMonthlyUsageAttribution(params)
  .then((data: v1.MonthlyUsageAttributionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
