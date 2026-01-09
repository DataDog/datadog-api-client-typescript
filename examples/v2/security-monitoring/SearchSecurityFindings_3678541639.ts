/**
 * Search security findings returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiSearchSecurityFindingsRequest = {
  body: {
    data: {
      attributes: {
        filter: "@severity:(critical OR high)",
        page: {
          limit: 1,
        },
      },
    },
  },
};

apiInstance
  .searchSecurityFindings(params)
  .then((data: v2.ListSecurityFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
