/**
 * Create Custom Rule Revision returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCustomRuleRevision"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateCustomRuleRevisionRequest = {
  body: {
    data: {
      attributes: {
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
        treeSitterQuery: "Y29uZHVjdG9yOgogICAgLSBkZXBsb3lfb25seTogdHJ1ZQ==",
      },
      type: "custom_rule_revision",
    },
  },
  rulesetName: "ruleset_name",
  ruleName: "rule_name",
};

apiInstance
  .createCustomRuleRevision(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
