/**
 * Get a WAF exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

// there is a valid "exclusion_filter" in the system
const EXCLUSION_FILTER_DATA_ID = process.env.EXCLUSION_FILTER_DATA_ID as string;

const params: v2.ApplicationSecurityApiGetApplicationSecurityWafExclusionFilterRequest =
  {
    exclusionFilterId: EXCLUSION_FILTER_DATA_ID,
  };

apiInstance
  .getApplicationSecurityWafExclusionFilter(params)
  .then((data: v2.ApplicationSecurityWafExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
