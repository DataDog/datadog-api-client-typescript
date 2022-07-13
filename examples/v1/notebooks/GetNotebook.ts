/**
 * Get a notebook returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

// there is a valid "notebook" in the system
const NOTEBOOK_DATA_ID = parseInt(process.env.NOTEBOOK_DATA_ID as string);

const params: v1.NotebooksApiGetNotebookRequest = {
  notebookId: NOTEBOOK_DATA_ID,
};

apiInstance
  .getNotebook(params)
  .then((data: v1.NotebookResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
