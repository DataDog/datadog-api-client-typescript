/**
 * Get a private location returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetPrivateLocationRequest = {
  locationId: "location_id",
};

apiInstance
  .getPrivateLocation(params)
  .then((data: v1.SyntheticsPrivateLocation) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
