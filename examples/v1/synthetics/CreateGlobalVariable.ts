/**
 * Create a global variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateGlobalVariableRequest = {
  body: {
    attributes: {
      restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
    },
    description: "Example description",
    name: "MY_VARIABLE",
    parseTestOptions: {
      field: "content-type",
      localVariableName: "LOCAL_VARIABLE",
      parser: {
        type: "regex",
        value: ".*",
      },
      type: "http_body",
    },
    parseTestPublicId: "abc-def-123",
    tags: ["team:front", "test:workflow-1"],
    value: {
      secure: true,
      value: "value",
    },
  },
};

apiInstance
  .createGlobalVariable(params)
  .then((data: v1.SyntheticsGlobalVariable) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
