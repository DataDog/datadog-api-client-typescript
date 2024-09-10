/**
 * Update a ASM Exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ASMExclusionFiltersApi(configuration);

const params: v2.ASMExclusionFiltersApiUpdateASMExclusionFilterRequest = {
  body: {
    data: {
      attributes: {
        description: "My Exclusion filter",
        enabled: true,
        ipList: ["127.0.0.1"],
        pathGlob: "/lfi_include/*",
        rulesTarget: [
          {
            tags: {
              category: "attack_attempt",
              type: "lfi",
            },
          },
        ],
        scope: [
          {
            env: "dd-appsec-php-support",
            service: "anil-php-weblog",
          },
        ],
      },
      id: "3dd-0uc-h1s",
      type: "exclusion_filter",
    },
  },
  exclusionFilterId: "exclusion_filter_id",
};

apiInstance
  .updateASMExclusionFilter(params)
  .then((data: v2.ASMExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
