/**
 * Create an Application Security exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiCreateApplicationSecurityExclusionFilterRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Exclude false positives on a path",
          enabled: true,
          ipList: ["198.51.100.72"],
          onMatch: "monitor",
          parameters: ["list.search.query"],
          pathGlob: "/accounts/*",
          rulesTarget: [
            {
              ruleId: "dog-913-009",
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
  .createApplicationSecurityExclusionFilter(params)
  .then((data: v2.ApplicationSecurityExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
