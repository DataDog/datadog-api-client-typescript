/**
 * Edit a private location returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiUpdatePrivateLocationRequest = {
  body: {
    description: "Description of private location",
    metadata: {
      restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
    },
    name: "New private location",
    tags: ["team:front"],
  },
  locationId: "location_id",
};

apiInstance
  .updatePrivateLocation(params)
  .then((data: v1.SyntheticsPrivateLocation) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
