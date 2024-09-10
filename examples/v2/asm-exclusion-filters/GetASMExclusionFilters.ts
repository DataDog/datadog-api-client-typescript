/**
 * Get a specific ASM Exclusion Filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ASMExclusionFiltersApi(configuration);

const params: v2.ASMExclusionFiltersApiGetASMExclusionFiltersRequest = {
  exclusionFilterId: "exclusion_filter_id",
};

apiInstance
  .getASMExclusionFilters(params)
  .then((data: v2.ASMExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
