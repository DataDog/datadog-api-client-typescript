/**
 * Sets Domain Allowlist returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DomainAllowlistApi(configuration);

const params: v2.DomainAllowlistApiPatchDomainAllowlistRequest = {
  body: {
    data: {
      attributes: {
        domains: ["@static-test-domain.test"],
        enabled: false,
      },
      type: "domain_allowlist",
    },
  },
};

apiInstance
  .patchDomainAllowlist(params)
  .then((data: v2.DomainAllowlistResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
