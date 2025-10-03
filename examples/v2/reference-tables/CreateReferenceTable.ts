/**
 * Create reference table returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiCreateReferenceTableRequest = {
  body: {
    data: {
      attributes: {
        description: "this is a cloud table generated via a cloud bucket sync",
        fileMetadata: {
          accessDetails: {
            awsDetail: {
              awsAccountId: "test-account-id",
              awsBucketName: "test-bucket",
              filePath: "test_rt.csv",
            },
          },
          syncEnabled: true,
        },
        schema: {
          fields: [
            {
              name: "name",
              type: "STRING",
            },
            {
              name: "account_id",
              type: "STRING",
            },
          ],
          primaryKeys: ["account_id"],
        },
        source: "S3",
        tableName: "test_reference_table",
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
