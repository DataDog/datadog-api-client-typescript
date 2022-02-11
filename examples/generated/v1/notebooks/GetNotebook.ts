import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params: v1.NotebooksApiGetNotebookRequest = {
  // number | Unique ID, assigned when you create the notebook.
  notebookId: 1,
};

apiInstance
  .getNotebook(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
