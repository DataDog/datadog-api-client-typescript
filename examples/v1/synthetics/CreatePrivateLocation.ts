/**
 * Create a private location returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreatePrivateLocationRequest = {
  body: {
    description: "Description of private location",
    name: "New private location",
    tags: ["team:front"],
  },
};

apiInstance
  .createPrivateLocation(params)
  .then((data: v1.SyntheticsPrivateLocationCreationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
