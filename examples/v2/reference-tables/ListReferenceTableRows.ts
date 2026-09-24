/**
 * List rows returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiListReferenceTableRowsRequest = {
  id: "id",
};

apiInstance
  .listReferenceTableRows(params)
  .then((data: v2.ListRowsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
