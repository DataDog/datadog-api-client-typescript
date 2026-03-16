/**
 * Get list of available licenses returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLicenses"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

apiInstance
  .getLicenses()
  .then((data: v2.LicensesListRequest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
