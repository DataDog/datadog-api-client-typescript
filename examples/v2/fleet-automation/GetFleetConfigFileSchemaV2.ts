/**
 * Get a configuration file's schema by path returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiGetFleetConfigFileSchemaV2Request = {
  filePath: "file_path",
};

apiInstance
  .getFleetConfigFileSchemaV2(params)
  .then((data: v2.FleetConfigFileSchemaV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
