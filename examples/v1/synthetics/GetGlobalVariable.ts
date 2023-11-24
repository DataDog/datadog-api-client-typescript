/**
 * Get a global variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_global_variable" in the system
const SYNTHETICS_GLOBAL_VARIABLE_ID = process.env
  .SYNTHETICS_GLOBAL_VARIABLE_ID as string;

const params: v1.SyntheticsApiGetGlobalVariableRequest = {
  variableId: SYNTHETICS_GLOBAL_VARIABLE_ID,
};

apiInstance
  .getGlobalVariable(params)
  .then((data: v1.SyntheticsGlobalVariable) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
