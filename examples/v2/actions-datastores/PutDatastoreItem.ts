/**
 * Put datastore item returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

// there is a valid "datastore" in the system
const DATASTORE_DATA_ID = process.env.DATASTORE_DATA_ID as string;

const params: v2.ActionsDatastoresApiPutDatastoreItemRequest = {
  body: {
    data: {
      attributes: {
        value: {
          "28173b88-1a0e-001e-28c0-7664b6410518": "new-item-key",
          data: "example data",
          key: "value",
        },
      },
      type: "items",
      id: "e7e64418-b60c-4789-9612-895ac8423207",
    },
  },
  datastoreId: DATASTORE_DATA_ID,
};

apiInstance
  .putDatastoreItem(params)
  .then((data: v2.PutAppsDatastoreItemResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
