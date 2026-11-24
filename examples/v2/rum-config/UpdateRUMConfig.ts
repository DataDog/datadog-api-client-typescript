/**
 * Update the RUM configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateRUMConfig"] = true;
const apiInstance = new v2.RUMConfigApi(configuration);

const params: v2.RUMConfigApiUpdateRUMConfigRequest = {
  body: {
    data: {
      attributes: {
        enforcedApplicationTags: true,
      },
      type: "rum_config",
    },
  },
};

apiInstance
  .updateRUMConfig(params)
  .then((data: v2.RUMConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
