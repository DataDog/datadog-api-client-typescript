/**
 * Returns a list of Secrets rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSecretsRules"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .getSecretsRules()
  .then((data: v2.SecretRuleArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
