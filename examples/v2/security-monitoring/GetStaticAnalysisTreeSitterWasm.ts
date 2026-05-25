/**
 * Get tree-sitter WASM file returns "BLOB with the content of the WASM file" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getStaticAnalysisTreeSitterWasm"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetStaticAnalysisTreeSitterWasmRequest = {
  file: "tree-sitter-python.wasm",
};

apiInstance
  .getStaticAnalysisTreeSitterWasm(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
