/**
 * Delete rows returns "Rows deleted successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiDeleteRowsRequest = {
  body: {
    data: [
      {
        id: "primary_key_value",
        type: "row",
      },
    ],
  },
  id: "id",
};

apiInstance
  .deleteRows(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
