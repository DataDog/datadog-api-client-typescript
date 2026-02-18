/**
 * Assign seats to users returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SeatsApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.SeatsApiAssignSeatsUserRequest = {
  body: {
    data: {
      type: "seat-assignments",
      attributes: {
        productCode: "incident_response",
        userUuids: [USER_DATA_ID],
      },
    },
  },
};

apiInstance
  .assignSeatsUser(params)
  .then((data: v2.AssignSeatsUserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
