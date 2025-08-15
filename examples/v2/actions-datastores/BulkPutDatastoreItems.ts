/**
 * Bulk put datastore items returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

// there is a valid "datastore" in the system
const DATASTORE_DATA_ID = process.env.DATASTORE_DATA_ID as string;

const params: v2.ActionsDatastoresApiBulkPutDatastoreItemsRequest = {
  body: {
    data: {
      attributes: {
        values: [
          {
            "28173b88-1a0e-001e-28c0-7664b6410518": "key1",
            value: "{'data': 'example data 1', 'key': 'value'}",
          },
          {
            "28173b88-1a0e-001e-28c0-7664b6410518": "key2",
            value: "{'data': 'example data 2', 'key': 'value'}",
          },
        ],
      },
      type: "items",
    },
  },
  datastoreId: DATASTORE_DATA_ID,
};

apiInstance
  .bulkPutDatastoreItems(params)
  .then((data: v2.PutAppsDatastoreItemResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
