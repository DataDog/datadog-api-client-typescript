/**
 * Get all permanent RUM retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMRetentionFiltersApi(configuration);

const params: v2.RUMRetentionFiltersApiListPermanentRetentionFiltersRequest = {
  appId: "app_id",
};

apiInstance
  .listPermanentRetentionFilters(params)
  .then((data: v2.RUMPermanentRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
