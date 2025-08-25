/**
 * Create a case returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.CaseManagementApiCreateCaseRequest = {
  body: {
    data: {
      attributes: {
        priority: "NOT_DEFINED",
        title: "Security breach investigation in 0cfbc5cbc676ee71",
        typeId: "00000000-0000-0000-0000-000000000001",
      },
      relationships: {
        assignee: {
          data: {
            id: USER_DATA_ID,
            type: "user",
          },
        },
        project: {
          data: {
            id: "d4bbe1af-f36e-42f1-87c1-493ca35c320e",
            type: "project",
          },
        },
      },
      type: "case",
    },
  },
};

apiInstance
  .createCase(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
