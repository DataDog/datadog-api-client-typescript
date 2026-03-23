import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";

/**
 * A static analysis rule within a ruleset, including its definition, metadata, and associated test cases.
 */
export class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems {
  /**
   * The list of configurable arguments accepted by this rule.
   */
  "arguments"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>;
  /**
   * The category classifying the type of issue this rule detects (e.g., security, style, performance).
   */
  "category"?: string;
  /**
   * A checksum of the rule definition used to detect changes.
   */
  "checksum"?: string;
  /**
   * The rule implementation code used by the static analysis engine.
   */
  "code"?: string;
  /**
   * The date and time when the rule was created.
   */
  "createdAt"?: Date;
  /**
   * The identifier of the user or system that created the rule.
   */
  "createdBy"?: string;
  /**
   * The CVE identifier associated with the vulnerability this rule detects, if applicable.
   */
  "cve"?: string;
  /**
   * The CWE identifier associated with the weakness category this rule detects, if applicable.
   */
  "cwe"?: string;
  /**
   * The resource identifier and type for a static analysis rule.
   */
  "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData;
  /**
   * A detailed explanation of what the rule detects and why it matters.
   */
  "description"?: string;
  /**
   * A URL pointing to additional documentation for this rule.
   */
  "documentationUrl"?: string;
  /**
   * The code entity type (e.g., function, class, variable) that this rule inspects.
   */
  "entityChecked"?: string;
  /**
   * Indicates whether the rule is publicly published and available to all users.
   */
  "isPublished"?: boolean;
  /**
   * Indicates whether the rule is in testing mode and not yet promoted to production.
   */
  "isTesting"?: boolean;
  /**
   * The programming language this rule applies to.
   */
  "language"?: string;
  /**
   * The date and time when the rule was last modified.
   */
  "lastUpdatedAt"?: Date;
  /**
   * The identifier of the user or system that last updated the rule.
   */
  "lastUpdatedBy"?: string;
  /**
   * The unique name identifying this rule within its ruleset.
   */
  "name"?: string;
  /**
   * A regular expression pattern used by the rule for pattern-based detection.
   */
  "regex"?: string;
  /**
   * The severity level of findings produced by this rule (e.g., ERROR, WARNING, NOTICE).
   */
  "severity"?: string;
  /**
   * A brief summary of what the rule detects, suitable for display in listings.
   */
  "shortDescription"?: string;
  /**
   * Indicates whether an AI-generated fix suggestion should be offered for findings from this rule.
   */
  "shouldUseAiFix"?: boolean;
  /**
   * The list of test cases used to validate the rule's behavior.
   */
  "tests"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>;
  /**
   * The Tree-sitter query expression used by the rule to match code patterns in the AST.
   */
  "treeSitterQuery"?: string;
  /**
   * The rule type indicating the detection mechanism used (e.g., tree_sitter, regex).
   */
  "type"?: string;
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
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>",
    },
    category: {
      baseName: "category",
      type: "string",
    },
    checksum: {
      baseName: "checksum",
      type: "string",
    },
    code: {
      baseName: "code",
      type: "string",
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
    data: {
      baseName: "data",
      type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData",
      required: true,
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
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>",
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems.attributeTypeMap;
  }

  public constructor() {}
}
