/**
 * List all WAF custom rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

apiInstance
  .listApplicationSecurityWAFCustomRules()
  .then((data: v2.ApplicationSecurityWafCustomRuleListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
