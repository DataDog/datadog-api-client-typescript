/**
 * Create custom attribute config for a case type returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementAttributeApi(configuration);

// there is a valid "case_type" in the system
const CASE_TYPE_ID = process.env.CASE_TYPE_ID as string;

const params: v2.CaseManagementAttributeApiCreateCustomAttributeConfigRequest =
  {
    body: {
      data: {
        attributes: {
          displayName: "AWS Region 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          isMulti: true,
          key: "region_d9fe56bc9274fbb6",
          type: "NUMBER",
        },
        type: "custom_attribute",
      },
    },
    caseTypeId: CASE_TYPE_ID,
  };

apiInstance
  .createCustomAttributeConfig(params)
  .then((data: v2.CustomAttributeConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
