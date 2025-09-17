/**
 * Delete custom attribute from case returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

// there is a valid "case" with a custom "case_type" in the system
const CASE_WITH_TYPE_ID = process.env.CASE_WITH_TYPE_ID as string;

// there is a valid "custom_attribute" in the system
const CUSTOM_ATTRIBUTE_ATTRIBUTES_KEY = process.env
  .CUSTOM_ATTRIBUTE_ATTRIBUTES_KEY as string;

const params: v2.CaseManagementApiDeleteCaseCustomAttributeRequest = {
  caseId: CASE_WITH_TYPE_ID,
  customAttributeKey: CUSTOM_ATTRIBUTE_ATTRIBUTES_KEY,
};

apiInstance
  .deleteCaseCustomAttribute(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
