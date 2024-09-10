/**
 * List ASM Exclusion Filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ASMExclusionFiltersApi(configuration);

apiInstance
  .listASMExclusionFilters()
  .then((data: v2.ASMExclusionFilterListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
