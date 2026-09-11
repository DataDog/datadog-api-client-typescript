/**
 * Delete a Snowflake integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteSnowflakeIntegrationAccount"] = true;
const apiInstance = new v2.SnowflakeIntegrationApi(configuration);

const params: v2.SnowflakeIntegrationApiDeleteSnowflakeIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteSnowflakeIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
