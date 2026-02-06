/**
 * Search notebooks returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchNotebooks"] = true;
const apiInstance = new v2.NotebooksApi(configuration);

apiInstance
  .searchNotebooks()
  .then((data: v2.NotebookSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
