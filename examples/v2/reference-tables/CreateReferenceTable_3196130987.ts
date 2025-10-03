/**
 * Create reference table with upload returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiCreateReferenceTableRequest = {
  body: {
    data: {
      attributes: {
        description:
          "Test reference table created via BDD test Example-Reference-Table",
        source: "LOCAL_FILE",
        fileMetadata: {
          uploadId: "test-upload-id-Example-Reference-Table",
        },
        schema: {
          fields: [
            {
              name: "id",
              type: "STRING",
            },
            {
              name: "name",
              type: "STRING",
            },
            {
              name: "value",
              type: "INT32",
            },
          ],
          primaryKeys: ["id"],
        },
        tableName: "test_reference_table_Example-Reference-Table",
        tags: ["test_tag"],
      },
      type: "reference_table",
    },
  },
};

apiInstance
  .createReferenceTable(params)
  .then((data: v2.TableResultV2) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
