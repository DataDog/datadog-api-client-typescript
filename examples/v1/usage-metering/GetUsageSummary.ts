/**
 * Get usage across your account returns "OK" response
 */

import { client, v1, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();

// Step 1: call v2 getUsageSummaryAvailableFields to enumerate all field names
const v2ApiInstance = new v2.UsageMeteringApi(configuration);

v2ApiInstance
  .getUsageSummaryAvailableFields()
  .then((fieldsData: v2.UsageSummaryAvailableFieldsResponse) => {
    const attrs = fieldsData.data?.attributes;
    const responseFields: string[] = attrs?.responseFields ?? [];
    const dateFields: string[] = attrs?.dateFields ?? [];
    const dateOrgFields: string[] = attrs?.dateOrgFields ?? [];

    console.log(`responseFields count: ${responseFields.length}`);
    console.log(`dateFields count: ${dateFields.length}`);
    console.log(`dateOrgFields count: ${dateOrgFields.length}`);

    // Step 2: call v1 getUsageSummary for approximately the last month
    const v1ApiInstance = new v1.UsageMeteringApi(configuration);

    const params: v1.UsageMeteringApiGetUsageSummaryRequest = {
      startMonth: new Date(2021, 11, 11, 11, 11, 11, 111000),
      includeOrgDetails: true,
    };

    v1ApiInstance
      .getUsageSummary(params)
      .then((data: v1.UsageSummaryResponse) => {
        // --- Layer 1: top-level response additionalProperties ---
        console.log("\n=== Top-level response additionalProperties ===");
        const topProps = data.additionalProperties ?? {};
        for (const field of responseFields) {
          const value = topProps[field];
          if (value !== undefined && value !== null) {
            console.log(`  ${field}: ${value}`);
          }
        }

        // --- Layer 2: per-date entries ---
        const usageDates = data.usage ?? [];
        for (const dateEntry of usageDates) {
          const dateLabel = dateEntry.date?.toISOString() ?? "(unknown date)";
          console.log(`\n=== Date entry: ${dateLabel} ===`);

          const dateProps = dateEntry.additionalProperties ?? {};
          for (const field of dateFields) {
            const value = dateProps[field];
            if (value !== undefined && value !== null) {
              console.log(`  ${field}: ${value}`);
            }
          }

          // --- Layer 3: per-date per-org entries ---
          const orgs = dateEntry.orgs ?? [];
          for (const orgEntry of orgs) {
            const orgName = orgEntry.name ?? orgEntry.publicId ?? "(org)";
            console.log(`\n  === Org: ${orgName} ===`);

            const orgProps = orgEntry.additionalProperties ?? {};
            for (const field of dateOrgFields) {
              const value = orgProps[field];
              if (value !== undefined && value !== null) {
                console.log(`    ${field}: ${value}`);
              }
            }
          }
        }
      })
      .catch((error: any) => console.error(error));
  })
  .catch((error: any) => console.error(error));
