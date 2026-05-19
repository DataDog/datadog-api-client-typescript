/**
 * Create a case link returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCaseLink"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseLinkRequest = {
  body: {
    data: {
      attributes: {
        childEntityId: "4417921d-0866-4a38-822c-6f2a0f65f77d",
        childEntityType: "CASE",
        parentEntityId: "bf0cbac6-4c16-4cfb-b6bf-ca5e0ec37a4f",
        parentEntityType: "CASE",
        relationship: "BLOCKS",
      },
      type: "link",
    },
  },
};

apiInstance
  .createCaseLink(params)
  .then((data: v2.CaseLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
