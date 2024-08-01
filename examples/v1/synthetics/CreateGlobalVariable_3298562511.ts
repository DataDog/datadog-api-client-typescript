/**
 * Create a FIDO global variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateGlobalVariableRequest = {
  body: {
    description: "",
    isFido: true,
    name: "GLOBAL_VARIABLE_FIDO_PAYLOAD_EXAMPLESYNTHETIC",
    tags: [],
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
