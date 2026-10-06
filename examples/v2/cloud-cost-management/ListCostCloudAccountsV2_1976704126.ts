/**
 * List Cloud Cost Management cloud accounts with OCI filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCostCloudAccountsV2Request = {
  filterCloud: "oci",
};

apiInstance
  .listCostCloudAccountsV2(params)
  .then((data: v2.CloudCostAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
