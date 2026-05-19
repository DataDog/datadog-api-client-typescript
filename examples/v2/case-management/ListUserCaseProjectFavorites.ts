/**
 * List project favorites returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listUserCaseProjectFavorites"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

apiInstance
  .listUserCaseProjectFavorites()
  .then((data: v2.ProjectFavoritesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
