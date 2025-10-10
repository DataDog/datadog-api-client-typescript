/**
 * Delete custom attributes config returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementAttributeApi(configuration);

// there is a valid "case_type" in the system
const CASE_TYPE_ID = process.env.CASE_TYPE_ID as string;

// there is a valid "custom_attribute" in the system
const CUSTOM_ATTRIBUTE_ID = process.env.CUSTOM_ATTRIBUTE_ID as string;

const params: v2.CaseManagementAttributeApiDeleteCustomAttributeConfigRequest =
  {
    caseTypeId: CASE_TYPE_ID,
    customAttributeId: CUSTOM_ATTRIBUTE_ID,
  };

apiInstance
  .deleteCustomAttributeConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
