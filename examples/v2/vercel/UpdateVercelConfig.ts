/**
 * Update Vercel configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.VercelApi(configuration);

const params: v2.VercelApiUpdateVercelConfigRequest = {
  body: {
    apiKey: {
      id: "00000000-0000-0000-0000-000000000001",
      value: "",
    },
    logsConfig: {
      enabled: true,
      environments: ["production"],
      logSources: ["lambda"],
      samplingPercentage: 100,
    },
    traceConfig: {
      enabled: true,
      isDeprecatedOtel: false,
      samplingPercentage: 100,
    },
  },
  configurationId: "configuration_id",
};

apiInstance
  .updateVercelConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
