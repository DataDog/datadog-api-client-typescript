/**
 * Create a WAF custom rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiCreateApplicationSecurityWafCustomRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            action: "block_request",
            parameters: {
              location: "/blocking",
              statusCode: 403,
            },
          },
          blocking: false,
          conditions: [
            {
              operator: "match_regex",
              parameters: {
                data: "blocked_users",
                inputs: [
                  {
                    address: "server.db.statement",
                    keyPath: [],
                  },
                ],
                list: [],
                options: {
                  caseSensitive: false,
                  minLength: 0,
                },
                regex: "path.*",
                value: "custom_tag",
              },
            },
          ],
          enabled: false,
          name: "Block request from a bad useragent",
          pathGlob: "/api/search/*",
          scope: [
            {
              env: "prod",
              service: "billing-service",
            },
          ],
          tags: {
            category: "business_logic",
            type: "users.login.success",
          },
        },
        type: "custom_rule",
      },
    },
  };

apiInstance
  .createApplicationSecurityWafCustomRule(params)
  .then((data: v2.ApplicationSecurityWafCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
