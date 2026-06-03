/**
 * Get the list of SPDX licenses returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listSCALicenses"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

apiInstance
  .listSCALicenses()
  .then((data: v2.LicensesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
