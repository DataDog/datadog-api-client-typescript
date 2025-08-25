/**
 * Create a case type returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementTypeApi(configuration);

const params: v2.CaseManagementTypeApiCreateCaseTypeRequest = {
  body: {
    data: {
      attributes: {
        description: "Investigations done in case management",
        emoji: "👑",
        name: "Investigation",
      },
      type: "case_type",
    },
  },
};

apiInstance
  .createCaseType(params)
  .then((data: v2.CaseTypeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
