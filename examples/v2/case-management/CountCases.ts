/**
 * Count cases returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.countCases"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

apiInstance
  .countCases()
  .then((data: v2.CaseCountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
