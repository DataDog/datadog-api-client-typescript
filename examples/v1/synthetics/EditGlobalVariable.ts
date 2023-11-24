/**
 * Edit a global variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_global_variable" in the system
const SYNTHETICS_GLOBAL_VARIABLE_ID = process.env
  .SYNTHETICS_GLOBAL_VARIABLE_ID as string;

// there is a valid "synthetics_api_test_multi_step" in the system
const SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID as string;

const params: v1.SyntheticsApiEditGlobalVariableRequest = {
  body: {
    description: "Updated description.",
    name: "GLOBAL_VARIABLE_PAYLOAD_EXAMPLESYNTHETIC",
    parseTestOptions: {
      type: "local_variable",
      localVariableName: "EXTRACTED_VALUE",
    },
    parseTestPublicId: SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID,
    value: {
      secure: false,
      value: "",
    },
    tags: ["test:mytag"],
  },
  variableId: SYNTHETICS_GLOBAL_VARIABLE_ID,
};

apiInstance
  .editGlobalVariable(params)
  .then((data: v1.SyntheticsGlobalVariable) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
