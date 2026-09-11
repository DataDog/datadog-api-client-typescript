/**
 * List Snowflake integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listSnowflakeIntegrationAccounts"] = true;
const apiInstance = new v2.SnowflakeIntegrationApi(configuration);

apiInstance
  .listSnowflakeIntegrationAccounts()
  .then((data: v2.SnowflakeIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
