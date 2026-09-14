/**
 * Get available fields for usage summary returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

apiInstance
  .getUsageSummaryAvailableFields()
  .then((data: v2.UsageSummaryAvailableFieldsResponse) => {
    const attrs = data.data?.attributes;
    if (!attrs) return;

    const responseFields = attrs.responseFields ?? [];
    console.log(`response_fields (${responseFields.length}):`);
    for (const f of responseFields) console.log(`  ${f}`);

    const dateFields = attrs.dateFields ?? [];
    console.log(`date_fields (${dateFields.length}):`);
    for (const f of dateFields) console.log(`  ${f}`);

    const dateOrgFields = attrs.dateOrgFields ?? [];
    console.log(`date_org_fields (${dateOrgFields.length}):`);
    for (const f of dateOrgFields) console.log(`  ${f}`);
  })
  .catch((error: any) => console.error(error));
