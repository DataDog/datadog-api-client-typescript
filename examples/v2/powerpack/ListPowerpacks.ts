/**
 * Get all powerpacks returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.PowerpackApi(configuration);

const params: v2.PowerpackApiListPowerpacksRequest = {
  pageLimit: 1000,
};

apiInstance
  .listPowerpacks(params)
  .then((data: v2.ListPowerpacksResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
