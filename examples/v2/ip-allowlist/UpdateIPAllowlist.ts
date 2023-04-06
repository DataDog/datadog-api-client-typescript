/**
 * Update IP Allowlist returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IPAllowlistApi(configuration);

const params: v2.IPAllowlistApiUpdateIPAllowlistRequest = {
  body: {
    data: {
      attributes: {
        entries: [
          {
            data: {
              attributes: {
                note: "Example-IP-Allowlist",
                cidrBlock: "127.0.0.1",
              },
              type: "ip_allowlist_entry",
            },
          },
        ],
        enabled: false,
      },
      type: "ip_allowlist",
    },
  },
};

apiInstance
  .updateIPAllowlist(params)
  .then((data: v2.IPAllowlistResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
