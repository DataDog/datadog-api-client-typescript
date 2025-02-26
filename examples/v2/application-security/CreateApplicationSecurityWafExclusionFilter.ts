/**
 * Create a WAF exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiCreateApplicationSecurityWafExclusionFilterRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Exclude false positives on a path",
          enabled: true,
          parameters: ["list.search.query"],
          pathGlob: "/accounts/*",
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
              env: "www",
              service: "prod",
            },
          ],
        },
        type: "exclusion_filter",
      },
    },
  };

apiInstance
  .createApplicationSecurityWafExclusionFilter(params)
  .then((data: v2.ApplicationSecurityWafExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
