/**
 * Disable the authenticated customer organization returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.disableCustomerOrg"] = true;
const apiInstance = new v2.CustomerOrgApi(configuration);

const params: v2.CustomerOrgApiDisableCustomerOrgRequest = {
  body: {
    data: {
      attributes: {
        orgUuid: "abcdef01-2345-6789-abcd-ef0123456789",
      },
      id: "1",
      type: "customer_org_disable",
    },
  },
};

apiInstance
  .disableCustomerOrg(params)
  .then((data: v2.CustomerOrgDisableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
