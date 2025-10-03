/**
 * Update reference table returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);

const params: v2.ReferenceTablesApiUpdateReferenceTableRequest = {
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
              name: "id",
              type: "INT32",
            },
            {
              name: "name",
              type: "STRING",
            },
          ],
          primaryKeys: ["id"],
        },
        syncEnabled: false,
        tags: ["test_tag"],
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "reference_table",
    },
  },
  id: "id",
};

apiInstance
  .updateReferenceTable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
