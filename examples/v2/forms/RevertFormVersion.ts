/**
 * Revert a form to a prior version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.revertFormVersion"] = true;
const apiInstance = new v2.FormsApi(configuration);

const params: v2.FormsApiRevertFormVersionRequest = {
  formId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  version: 9223372036854775807,
};

apiInstance
  .revertFormVersion(params)
  .then((data: v2.FormVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
