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
  pageId: "1234abcd-12ab-34cd-56ef-123456abcdef",
};

apiInstance
  .createEmailAccessPolicy(params)
  .then((data: v2.StatusPageEmailAccessPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
