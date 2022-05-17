/**
 * Create a private location returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

const params: v1.SyntheticsApiCreatePrivateLocationRequest = {
  body: {
    description:
      "Test Example-Create_a_private_location_returns_OK_response description",
    metadata: {
      restrictedRoles: [ROLE_DATA_ID],
    },
    name: "Example-Create_a_private_location_returns_OK_response",
    tags: ["test:examplecreateaprivatelocationreturnsokresponse"],
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
