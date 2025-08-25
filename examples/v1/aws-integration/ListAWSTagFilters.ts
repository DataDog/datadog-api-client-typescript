/**
 * Get all AWS tag filters returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiListAWSTagFiltersRequest = {
  accountId: "account_id",
};

apiInstance
  .listAWSTagFilters(params)
  .then((data: v1.AWSTagFilterListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
