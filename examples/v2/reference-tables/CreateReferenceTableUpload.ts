/**
 * Create reference table upload returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiCreateReferenceTableUploadRequest = {
  body: {
    data: {
      attributes: {
        headers: ["id", "name", "value"],
        tableName: "test_upload_table_Example-Reference-Table",
        partCount: 1,
        partSize: 1024,
      },
      type: "upload",
    },
  },
};

apiInstance
  .createReferenceTableUpload(params)
  .then((data: v2.CreateUploadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
