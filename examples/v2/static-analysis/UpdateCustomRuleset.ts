/**
 * Update Custom Ruleset returns "Successfully updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiUpdateCustomRulesetRequest = {
  body: {
    data: {
      attributes: {
        rules: [
          {
            createdAt: new Date(2026, 1, 9, 13, 0, 57, 473141),
            createdBy: "foobarbaz",
            lastRevision: {
              attributes: {
                arguments: [
                  {
                    description: "YXJndW1lbnQgZGVzY3JpcHRpb24=",
                    name: "YXJndW1lbnRfbmFtZQ==",
                  },
                ],
                category: "SECURITY",
                checksum:
                  "8a66c4e4e631099ad71be3c1ea3ea8fc2d57193e56db2c296e2dd8a508b26b99",
                code: "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
                createdAt: new Date(2026, 1, 9, 13, 0, 57, 473141),
                createdBy: "foobarbaz",
                creationMessage: "Initial revision",
                cve: "CVE-2024-1234",
                cwe: "CWE-79",
                description: "bG9uZyBkZXNjcmlwdGlvbg==",
                documentationUrl: "https://docs.example.com/rules/my-rule",
                isPublished: false,
                isTesting: false,
                language: "PYTHON",
                severity: "ERROR",
                shortDescription: "c2hvcnQgZGVzY3JpcHRpb24=",
                shouldUseAiFix: false,
                tags: ["security", "custom"],
                tests: [
                  {
                    annotationCount: 1,
                    code: "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
                    filename: "test.yaml",
                  },
                ],
                treeSitterQuery:
                  "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
              },
              id: "revision-123",
              type: "custom_rule_revision",
            },
            name: "my-rule",
          },
        ],
      },
      type: "custom_ruleset",
    },
  },
  rulesetName: "ruleset_name",
};

apiInstance
  .updateCustomRuleset(params)
  .then((data: v2.CustomRulesetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
