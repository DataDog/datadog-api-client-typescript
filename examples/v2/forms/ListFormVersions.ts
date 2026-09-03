/**
 * List form versions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFormVersions"] = true;
const apiInstance = new v2.FormsApi(configuration);

const params: v2.FormsApiListFormVersionsRequest = {
  formId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .listFormVersions(params)
  .then((data: v2.ListFormVersionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
