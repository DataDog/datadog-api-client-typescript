/**
 * Get a Snowflake integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSnowflakeIntegrationAccount"] = true;
const apiInstance = new v2.SnowflakeIntegrationApi(configuration);

const params: v2.SnowflakeIntegrationApiGetSnowflakeIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getSnowflakeIntegrationAccount(params)
  .then((data: v2.SnowflakeIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
