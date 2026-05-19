/**
 * Delete a case link returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteCaseLink"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiDeleteCaseLinkRequest = {
  linkId: "804cd682-55f6-4541-ab00-b608b282ea7d",
};

apiInstance
  .deleteCaseLink(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
