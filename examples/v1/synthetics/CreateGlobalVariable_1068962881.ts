/**
 * Create a global variable from test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_api_test_multi_step" in the system
const SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID as string;

const params: v1.SyntheticsApiCreateGlobalVariableRequest = {
  body: {
    description: "",
    name: "GLOBAL_VARIABLE_FROM_TEST_PAYLOAD_EXAMPLESYNTHETIC",
    tags: [],
    value: {
      secure: false,
      value: "",
    },
    parseTestPublicId: SYNTHETICS_API_TEST_MULTI_STEP_PUBLIC_ID,
    parseTestOptions: {
      type: "local_variable",
      localVariableName: "EXTRACTED_VALUE",
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
