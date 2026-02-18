/**
 * Get users with seats returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SeatsApi(configuration);

const params: v2.SeatsApiGetSeatsUsersRequest = {
  productCode: "incident_response",
  pageLimit: 100,
};

apiInstance
  .getSeatsUsers(params)
  .then((data: v2.SeatUserDataArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
