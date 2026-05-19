/**
 * Update custom attribute config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCustomAttributeConfig"] = true;
const apiInstance = new v2.CaseManagementAttributeApi(configuration);

const params: v2.CaseManagementAttributeApiUpdateCustomAttributeConfigRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Updated description.",
          displayName: "AWS Region",
          type: "NUMBER",
          typeData: {
            options: [
              {
                value: "us-east-1",
              },
            ],
          },
        },
        type: "custom_attribute",
      },
    },
    caseTypeId: "case_type_id",
    customAttributeId: "custom_attribute_id",
  };

apiInstance
  .updateCustomAttributeConfig(params)
  .then((data: v2.CustomAttributeConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
