/**
 * Validate query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiValidateQueryRequest = {
  body: {
    data: {
      attributes: {
        query: "example:query AND test:true",
      },
      type: "validate_query",
    },
  },
};

apiInstance
  .validateQuery(params)
  .then((data: v2.RulesValidateQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
