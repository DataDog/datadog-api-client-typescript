/**
 * Create an email access policy returns "Created" response
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

const params: v2.StatusPagesApiCreateEmailAccessPolicyRequest = {
  body: {
    data: {
      attributes: {
        effect: "allow",
        pattern: "@example.com",
      },
      type: "email_access_policies",
    },
  },
  pageId: PRIVATE_STATUS_PAGE_DATA_ID,
};

apiInstance
  .createEmailAccessPolicy(params)
  .then((data: v2.StatusPageEmailAccessPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
