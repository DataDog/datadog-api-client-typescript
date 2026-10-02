/**
 * Create subject type returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiCreateSubjectTypeRequest = {
  body: {
    data: {
      type: "subject-types",
      attributes: {
        name: "ex-14bb9543f523edde",
        productAnalyticsAttribute: "@account.id",
        warehouseColumnNames: ["account_id"],
      },
    },
  },
};

apiInstance
  .createSubjectType(params)
  .then((data: v2.ExperimentsSubjectTypeV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
