/**
 * Update a RUM application returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiUpdateRUMApplicationRequest = {
  body: {
    data: {
      attributes: {
        name: "updated_name_for_my_existing_rum_application",
        type: "browser",
      },
      id: "abcd1234-0000-0000-abcd-1234abcd5678",
      type: "rum_application_update",
    },
  },
  id: "id",
};

apiInstance
  .updateRUMApplication(params)
  .then((data: v2.RUMApplicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
