/**
 * List dataset restrictions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDatasetRestrictions"] = true;
const apiInstance = new v2.DatasetRestrictionsApi(configuration);

apiInstance
  .listDatasetRestrictions()
  .then((data: v2.DatasetRestrictionsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
