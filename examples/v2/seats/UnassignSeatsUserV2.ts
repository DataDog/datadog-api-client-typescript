/**
 * Unassign seats from users returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SeatsApi(configuration);

const params: v2.SeatsApiUnassignSeatsUserV2Request = {
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
  .unassignSeatsUserV2(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
