/**
 * Get all RUM retention filters returns "OK" response
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

const params: v2.RUMRetentionFiltersApiListRetentionFiltersRequest = {
  appId: "1d4b9c34-7ac4-423a-91cf-9902d926e9b3",
};

apiInstance
  .listRetentionFilters(params)
  .then((data: v2.RUMRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
