/**
 * Delete a private location returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiDeletePrivateLocationRequest = {
  locationId: "location_id",
};

apiInstance
  .deletePrivateLocation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
