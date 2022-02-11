import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params: v2.KeyManagementApiDeleteAPIKeyRequest = {
  // string | The ID of the API key.
  apiKeyId: "api_key_id_example",
};

apiInstance
  .deleteAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
