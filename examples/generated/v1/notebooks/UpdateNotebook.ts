import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiUpdateNotebookRequest = {
  // number | Unique ID, assigned when you create the notebook.
  notebookId: 1,
  // NotebookUpdateRequest | Update notebook request body.
  body: {
    data: {
      attributes: {
        cells: [
          {
    attributes: {
    definition: {
      text: `# Example Header 
example content`,
      type: "markdown",
    },
  },
    type: "notebook_cells",
  },
        ],
        metadata: {
          isTemplate: false,
          takeSnapshots: false,
          type: "investigation",
        },
        name: "Example Notebook",
        status: "published",
        time: {
    liveSpan: "5m",
  },
      },
      type: "notebooks",
    },
  },
};

apiInstance.updateNotebook(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
