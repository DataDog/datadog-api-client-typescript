/**
 * Patch a persistent email global variable preserves its address and type
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.SyntheticsApi(configuration);

// there is a valid "synthetics_email_global_variable" in the system
const SYNTHETICS_EMAIL_GLOBAL_VARIABLE_ID = process.env
  .SYNTHETICS_EMAIL_GLOBAL_VARIABLE_ID as string;

const params: v2.SyntheticsApiPatchGlobalVariableRequest = {
  body: {
    data: {
      type: "global_variables_json_patch",
      attributes: {
        jsonPatch: [
          {
            op: "replace",
            path: "/description",
            value: "Updated persistent email variable",
          },
        ],
      },
    },
  },
  variableId: SYNTHETICS_EMAIL_GLOBAL_VARIABLE_ID,
};

apiInstance
  .patchGlobalVariable(params)
  .then((data: v2.GlobalVariableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
