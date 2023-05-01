/**
 * Create a monitor configuration policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MonitorsApi(configuration);

const params: v2.MonitorsApiCreateMonitorConfigPolicyRequest = {
  body: {
    data: {
      attributes: {
        policyType: "tag",
        policy: {
          tagKey: "examplemonitor",
          tagKeyRequired: false,
          validTagValues: ["prod", "staging"],
        },
      },
      type: "monitor-config-policy",
    },
  },
};

apiInstance
  .createMonitorConfigPolicy(params)
  .then((data: v2.MonitorConfigPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
