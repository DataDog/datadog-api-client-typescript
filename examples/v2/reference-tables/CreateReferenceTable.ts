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
        fileMetadata: {
          accessDetails: {
            awsDetail: {
              awsAccountId: "123456789000",
              awsBucketName: "example-data-bucket",
              filePath: "reference-tables/users.csv",
            },
            azureDetail: {
              azureClientId: "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb",
              azureContainerName: "reference-data",
              azureStorageAccountName: "examplestorageaccount",
              azureTenantId: "cccccccc-4444-5555-6666-dddddddddddd",
              filePath: "tables/users.csv",
            },
            gcpDetail: {
              filePath: "data/reference_tables/users.csv",
              gcpBucketName: "example-data-bucket",
              gcpProjectId: "example-gcp-project-12345",
              gcpServiceAccountEmail:
                "example-service@example-gcp-project-12345.iam.gserviceaccount.com",
            },
          },
          syncEnabled: false,
        },
        schema: {
          fields: [
            {
              name: "field_1",
              type: "STRING",
            },
          ],
          primaryKeys: ["field_1"],
        },
        source: "LOCAL_FILE",
        tableName: "table_1",
        tags: ["tag_1", "tag_2"],
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
