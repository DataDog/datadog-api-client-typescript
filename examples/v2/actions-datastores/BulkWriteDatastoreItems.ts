/**
 * Bulk write datastore items returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

// there is a valid "datastore" in the system
const DATASTORE_DATA_ID = process.env.DATASTORE_DATA_ID as string;

const params: v2.ActionsDatastoresApiBulkWriteDatastoreItemsRequest = {
  body: {
    data: {
      attributes: {
        values: [
          {
            id: "cust_3141",
            name: "Johnathan",
          },
          {
            id: "cust_3142",
            name: "Mary",
          },
        ],
      },
      type: "items",
    },
  },
  datastoreId: DATASTORE_DATA_ID,
};

apiInstance
  .bulkWriteDatastoreItems(params)
  .then((data: v2.PutAppsDatastoreItemResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
