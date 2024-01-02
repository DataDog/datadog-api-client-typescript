/**
 * List related AWS accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListAWSRelatedAccountsRequest = {
  filterManagementAccountId: "123456789123",
};

apiInstance
  .listAWSRelatedAccounts(params)
  .then((data: v2.AWSRelatedAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
