/**
 * Get Vercel configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.VercelApi(configuration);

const params: v2.VercelApiGetVercelConfigRequest = {
  configurationId: "configuration_id",
};

apiInstance
  .getVercelConfig(params)
  .then((data: v2.VercelConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
