/**
 * Update a WAF exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

// there is a valid "exclusion_filter" in the system
const EXCLUSION_FILTER_DATA_ID = process.env.EXCLUSION_FILTER_DATA_ID as string;

const params: v2.ApplicationSecurityApiUpdateApplicationSecurityWafExclusionFilterRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Exclude false positives on a path",
          enabled: false,
          ipList: ["198.51.100.72"],
          onMatch: "monitor",
        },
        type: "exclusion_filter",
      },
    },
    exclusionFilterId: EXCLUSION_FILTER_DATA_ID,
  };

apiInstance
  .updateApplicationSecurityWafExclusionFilter(params)
  .then((data: v2.ApplicationSecurityWafExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
