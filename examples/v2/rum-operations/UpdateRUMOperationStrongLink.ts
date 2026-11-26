/**
 * Update a RUM operation link returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMOperationsApi(configuration);

// there is a valid "rum_operation_strong_link" in the system
const RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_FEATURE_ID = process.env
  .RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_FEATURE_ID as string;
const RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_OPERATION_ID = process.env
  .RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_OPERATION_ID as string;

const params: v2.RUMOperationsApiUpdateRUMOperationStrongLinkRequest = {
  body: {
    data: {
      type: "strong_links",
      attributes: {
        status: "REJECTED",
      },
    },
  },
  rumOperationId: RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_OPERATION_ID,
  featureId: RUM_OPERATION_STRONG_LINK_DATA_ATTRIBUTES_FEATURE_ID,
};

apiInstance
  .updateRUMOperationStrongLink(params)
  .then((data: v2.RUMOperationStrongLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
