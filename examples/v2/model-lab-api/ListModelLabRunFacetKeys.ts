/**
 * List Model Lab run facet keys returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listModelLabRunFacetKeys"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiListModelLabRunFacetKeysRequest = {
  filterProjectId: 2387,
};

apiInstance
  .listModelLabRunFacetKeys(params)
  .then((data: v2.ModelLabFacetKeysResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
