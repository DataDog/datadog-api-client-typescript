import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisRequestRuleArgument } from "./AnalysisRequestRuleArgument";
import { AnalysisRequestRuleTest } from "./AnalysisRequestRuleTest";

/**
 * A static analysis rule to apply during code analysis. Clients forward complete rule
 * objects returned by the rulesets endpoints, so every member of that resource is
 * declared here; only `id`, `category`, `checksum`, `language`, `severity`,
 * `tree_sitter_query`, `entity_checked`, `regex`, `type` and `code` are read by this
 * operation and the rest are ignored. The schema stays open so that any member beyond
 * the forwarded rule resource is reported as a promotion candidate rather than
 * rejected; it can be closed once that telemetry confirms none remain.
 */
export class AnalysisRequestRule {
  /**
   * The configurable arguments accepted by the rule. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "arguments"?: Array<AnalysisRequestRuleArgument>;
  /**
   * The category of the rule (for example, `BEST_PRACTICES`, `SECURITY`).
   */
  "category": string;
  /**
   * A checksum of the rule definition.
   */
  "checksum": string;
  /**
   * The base64-encoded rule implementation code.
   */
  "code": string;
  /**
   * The date and time when the rule was created. Server-assigned by the rulesets endpoints; ignored by this operation.
   */
  "createdAt"?: Date;
  /**
   * The identifier of the user or system that created the rule. Server-assigned by the rulesets endpoints; ignored by this operation.
   */
  "createdBy"?: string;
  /**
   * The CVE identifier associated with the rule. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "cve"?: string;
  /**
   * The CWE identifier associated with the rule. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "cwe"?: string;
  /**
   * A detailed explanation of what the rule detects. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "description"?: string;
  /**
   * A URL pointing to the rule documentation. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "documentationUrl"?: string;
  /**
   * The code entity type checked by the rule, applicable when rule type is `AST_CHECK`.
   */
  "entityChecked"?: string;
  /**
   * The unique identifier of the rule.
   */
  "id": string;
  /**
   * Whether the rule is published. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "isPublished"?: boolean;
  /**
   * Whether the rule is in testing mode. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "isTesting"?: boolean;
  /**
   * The programming language this rule targets.
   */
  "language": string;
  /**
   * The date and time when the rule was last modified. Server-assigned by the rulesets endpoints; ignored by this operation.
   */
  "lastUpdatedAt"?: Date;
  /**
   * The identifier of the user or system that last updated the rule. Server-assigned by the rulesets endpoints; ignored by this operation.
   */
  "lastUpdatedBy"?: string;
  /**
   * The name of the rule. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "name"?: string;
  /**
   * A base64-encoded regex pattern used by the rule, applicable when rule type is `REGEX`.
   */
  "regex"?: string;
  /**
   * The severity of findings from this rule (for example, `ERROR`, `WARNING`).
   */
  "severity": string;
  /**
   * A brief summary of what the rule detects. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "shortDescription"?: string;
  /**
   * Whether an AI-generated fix should be offered. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "shouldUseAiFix"?: boolean;
  /**
   * The test cases associated with the rule. Forwarded from the rulesets endpoints; ignored by this operation.
   */
  "tests"?: Array<AnalysisRequestRuleTest>;
  /**
   * The base64-encoded tree-sitter query used by the rule.
   */
  "treeSitterQuery": string;
  /**
   * The rule type indicating the detection mechanism (for example, `TREE_SITTER_QUERY`).
   */
  "type": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    arguments: {
      baseName: "arguments",
      type: "Array<AnalysisRequestRuleArgument>",
    },
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    checksum: {
      baseName: "checksum",
      type: "string",
      required: true,
    },
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    cve: {
      baseName: "cve",
      type: "string",
    },
    cwe: {
      baseName: "cwe",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    documentationUrl: {
      baseName: "documentation_url",
      type: "string",
    },
    entityChecked: {
      baseName: "entity_checked",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    isPublished: {
      baseName: "is_published",
      type: "boolean",
    },
    isTesting: {
      baseName: "is_testing",
      type: "boolean",
    },
    language: {
      baseName: "language",
      type: "string",
      required: true,
    },
    lastUpdatedAt: {
      baseName: "last_updated_at",
      type: "Date",
      format: "date-time",
    },
    lastUpdatedBy: {
      baseName: "last_updated_by",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    regex: {
      baseName: "regex",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
    },
    shouldUseAiFix: {
      baseName: "should_use_ai_fix",
      type: "boolean",
    },
    tests: {
      baseName: "tests",
      type: "Array<AnalysisRequestRuleTest>",
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnalysisRequestRule.attributeTypeMap;
  }

  public constructor() {}
}
