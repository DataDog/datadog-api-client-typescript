/**
 * Create datastore returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionsDatastoresApi(configuration);

const params: v2.ActionsDatastoresApiCreateDatastoreRequest = {
  body: {
    data: {
      attributes: {
        name: "datastore-name",
        primaryColumnName: "primaryKey",
      },
      type: "datastores",
    },
  },
};

apiInstance
  .createDatastore(params)
  .then((data: v2.CreateAppsDatastoreResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
