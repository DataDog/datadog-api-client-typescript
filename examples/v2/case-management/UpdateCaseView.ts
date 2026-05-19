/**
 * Update a case view returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseView"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateCaseViewRequest = {
  body: {
    data: {
      attributes: {},
      type: "view",
    },
  },
  viewId: "view_id",
};

apiInstance
  .updateCaseView(params)
  .then((data: v2.CaseViewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
