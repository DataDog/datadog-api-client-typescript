/**
 * Create the RUM configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createRUMConfig"] = true;
const apiInstance = new v2.RUMConfigApi(configuration);

const params: v2.RUMConfigApiCreateRUMConfigRequest = {
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
  .createRUMConfig(params)
  .then((data: v2.RUMConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
