/**
 * Create the RUM configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createRumConfig"] = true;
const apiInstance = new v2.RumConfigApi(configuration);

const params: v2.RumConfigApiCreateRumConfigRequest = {
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
  .createRumConfig(params)
  .then((data: v2.RumConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
