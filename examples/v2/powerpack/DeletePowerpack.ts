/**
 * Delete a powerpack returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.PowerpackApi(configuration);

// there is a valid "powerpack" in the system
const POWERPACK_DATA_ID = process.env.POWERPACK_DATA_ID as string;

const params: v2.PowerpackApiDeletePowerpackRequest = {
  powerpackId: POWERPACK_DATA_ID,
};

apiInstance
  .deletePowerpack(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
