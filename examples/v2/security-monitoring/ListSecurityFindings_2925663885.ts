/**
 * List security findings returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListSecurityFindingsRequest = {
  pageLimit: 5,
};

apiInstance
  .listSecurityFindings(params)
  .then((data: v2.ListSecurityFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
