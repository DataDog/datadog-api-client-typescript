/**
 * Update account filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostAccountFiltersRequest = {
  body: {
    data: {
      attributes: {
        accountFilters: {
          excludedAccounts: ["123456789123", "123456789143"],
          includeNewAccounts: true,
          includedAccounts: ["123456789123", "123456789143"],
        },
      },
      type: "account_filters_patch_request",
    },
  },
  cloudAccountId: 9223372036854775807,
};

apiInstance
  .updateCostAccountFilters(params)
  .then((data: v2.AccountFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
