/**
 * Delete datastore returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

// a "datastore" is created in the system
const CREATED_DATASTORE_DATA_ID = process.env
  .CREATED_DATASTORE_DATA_ID as string;

const params: v2.ActionsDatastoresApiDeleteDatastoreRequest = {
  datastoreId: CREATED_DATASTORE_DATA_ID,
};

apiInstance
  .deleteDatastore(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
