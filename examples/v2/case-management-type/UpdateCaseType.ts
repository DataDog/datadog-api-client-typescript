/**
 * Update a case type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseType"] = true;
const apiInstance = new v2.CaseManagementTypeApi(configuration);

const params: v2.CaseManagementTypeApiUpdateCaseTypeRequest = {
  body: {
    data: {
      attributes: {
        description: "Investigations done in case management",
        emoji: "🕵🏻\u200d♂️",
        name: "Investigation",
      },
      type: "case_type",
    },
  },
  caseTypeId: "case_type_id",
};

apiInstance
  .updateCaseType(params)
  .then((data: v2.CaseTypeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
