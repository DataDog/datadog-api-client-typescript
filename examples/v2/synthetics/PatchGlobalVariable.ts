/**
 * Patch a global variable returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiPatchGlobalVariableRequest = {
  body: {
    data: {
      attributes: {
        jsonPatch: [
          {
            op: "add",
            path: "/name",
          },
        ],
      },
      type: "global_variables_json_patch",
    },
  },
  variableId: "variable_id",
};

apiInstance
  .patchGlobalVariable(params)
  .then((data: v2.GlobalVariableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
