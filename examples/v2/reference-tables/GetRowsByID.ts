/**
 * Get rows by id returns "Some or all requested rows were found." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiGetRowsByIDRequest = {
  id: "id",
  rowId: [],
};

apiInstance
  .getRowsByID(params)
  .then((data: v2.TableRowResourceArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
