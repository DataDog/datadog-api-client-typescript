/**
 * Create a new RUM application returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiCreateRUMApplicationRequest = {
  body: {
    data: {
      attributes: {
        name: "my_new_rum_application",
        type: "ios",
      },
      type: "rum_application_create",
    },
  },
};

apiInstance
  .createRUMApplication(params)
  .then((data: v2.RUMApplicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
