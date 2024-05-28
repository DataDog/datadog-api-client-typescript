/**
 * Test an existing rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiTestExistingSecurityMonitoringRuleRequest =
  {
    body: {
      ruleQueryPayloads: [
        {
          expectedResult: true,
          index: 0,
          payload: {
            ddsource: "nginx",
            ddtags: "env:staging,version:5.1",
            hostname: "i-012345678",
            message:
              "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
            service: "payment",
          },
        },
      ],
    },
    ruleId: "rule_id",
  };

apiInstance
  .testExistingSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
