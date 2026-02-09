/**
 * Assign seats to users returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SeatsApi(configuration);

const params: v2.SeatsApiAssignSeatsUserV2Request = {
  body: {
    data: {
      attributes: {
        productCode: "",
        userUuids: [""],
      },
      type: "seat-assignments",
    },
  },
};

apiInstance
  .assignSeatsUserV2(params)
  .then((data: v2.AssignSeatsUserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
