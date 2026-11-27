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
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

// there is a valid "rum_application" in the system
const RUM_APPLICATION_DATA_ID = process.env.RUM_APPLICATION_DATA_ID as string;

const params: v2.RumRetentionFiltersApiGetPermanentRetentionFilterRequest = {
  appId: RUM_APPLICATION_DATA_ID,
  permanentRfId: "synthetics_sessions",
};

apiInstance
  .getPermanentRetentionFilter(params)
  .then((data: v2.RumPermanentRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
