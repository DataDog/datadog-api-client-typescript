/**
 * Create a ASM WAF Exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ASMExclusionFiltersApi(configuration);

const params: v2.ASMExclusionFiltersApiCreateASMExclusionFilterRequest = {
  body: {
    data: {
      type: "exclusion_filter",
      attributes: {
        description: "my description",
        enabled: true,
        pathGlob: "*",
        rulesTarget: [
          {
            tags: {
              category: "attack_attempt",
              type: "sql_injection",
            },
          },
        ],
        scope: [
          {
            env: "staging",
            service: "container-resolver",
          },
        ],
      },
    },
  },
};

apiInstance
  .createASMExclusionFilter(params)
  .then((data: v2.ASMExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
