/**
 * Delete an email access policy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "private_status_page" in the system
const PRIVATE_STATUS_PAGE_DATA_ID = process.env
  .PRIVATE_STATUS_PAGE_DATA_ID as string;

// there is a valid "email_access_policy" in the system
const EMAIL_ACCESS_POLICY_DATA_ID = process.env
  .EMAIL_ACCESS_POLICY_DATA_ID as string;

const params: v2.StatusPagesApiDeleteEmailAccessPolicyRequest = {
  pageId: PRIVATE_STATUS_PAGE_DATA_ID,
  policyId: EMAIL_ACCESS_POLICY_DATA_ID,
};

apiInstance
  .deleteEmailAccessPolicy(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
