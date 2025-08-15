/**
 * Create datastore from import returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

const params: v2.ActionsDatastoresApiCreateDatastoreFromImportRequest = {
  body: {
    data: {
      attributes: {
        name: "datastore-name",
        primaryColumnName: "primaryKey",
        values: [
          {
            primaryKey: "key1",
            value: "{'data': 'example data 1', 'key': 'value'}",
          },
          {
            primaryKey: "key2",
            value: "{'data': 'example data 2', 'key': 'value'}",
          },
        ],
      },
      type: "datastores",
    },
  },
};

apiInstance
  .createDatastoreFromImport(params)
  .then((data: v2.CreateAppsDatastoreFromImportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
