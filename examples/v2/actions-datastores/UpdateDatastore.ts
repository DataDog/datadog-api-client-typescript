/**
 * Update datastore returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

// there is a valid "datastore" in the system
const DATASTORE_DATA_ID = process.env.DATASTORE_DATA_ID as string;

const params: v2.ActionsDatastoresApiUpdateDatastoreRequest = {
  body: {
    data: {
      attributes: {
        name: "updated name",
      },
      type: "datastores",
      id: DATASTORE_DATA_ID,
    },
  },
  datastoreId: DATASTORE_DATA_ID,
};

apiInstance
  .updateDatastore(params)
  .then((data: v2.Datastore) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
