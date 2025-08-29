/**
 * List datastores returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

apiInstance
  .listDatastores()
  .then((data: v2.DatastoreArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
