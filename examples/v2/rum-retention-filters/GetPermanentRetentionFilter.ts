/**
 * Get a permanent RUM retention filter returns "OK" response
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

const params: v2.RUMRetentionFiltersApiGetPermanentRetentionFilterRequest = {
  appId: "app_id",
  permanentRfId: "synthetics_sessions",
};

apiInstance
  .getPermanentRetentionFilter(params)
  .then((data: v2.RUMPermanentRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
