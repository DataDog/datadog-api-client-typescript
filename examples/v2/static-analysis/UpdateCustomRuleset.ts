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
        description: "bG9uZyBkZXNjcmlwdGlvbg==",
        name: "my-ruleset",
        rules: [
          {
            id: "my-rule",
            lastRevision: {
              arguments: [
                {
                  description: "YXJndW1lbnQgZGVzY3JpcHRpb24=",
                  name: "YXJndW1lbnRfbmFtZQ==",
                },
              ],
              category: "SECURITY",
              code: "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
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
            name: "my-rule",
            revisions: [
              {
                arguments: [
                  {
                    description: "YXJndW1lbnQgZGVzY3JpcHRpb24=",
                    name: "YXJndW1lbnRfbmFtZQ==",
                  },
                ],
                category: "SECURITY",
                code: "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
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
            ],
          },
        ],
        shortDescription: "c2hvcnQgZGVzY3JpcHRpb24=",
      },
      id: "my-ruleset",
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
