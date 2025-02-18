/**
 * Get an Application Security exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiGetApplicationSecurityExclusionFilterRequest =
  {
    exclusionFilterId: "exclusion_filter_id",
  };

apiInstance
  .getApplicationSecurityExclusionFilter(params)
  .then((data: v2.ApplicationSecurityExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
