/**
 * Get seats users returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SeatsApi(configuration);

const params: v2.SeatsApiGetSeatsUsersV2Request = {
  productCode: "product_code",
};

apiInstance
  .getSeatsUsersV2(params)
  .then((data: v2.SeatUserDataArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
