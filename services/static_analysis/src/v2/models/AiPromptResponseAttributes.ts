import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionExecutionMode } from "./AiCustomRuleRevisionExecutionMode";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";
import { Language } from "./Language";

/**
 * Response attributes of an AI prompt.
 */
export class AiPromptResponseAttributes {
  /**
   * Rule category
   */
  "category": CustomRuleRevisionAttributesCategory;
  /**
   * Checksum of the prompt content.
   */
  "checksum": string;
  /**
   * Base64-encoded AI prompt content.
   */
  "content": string;
  /**
   * The CWE identifier associated with this prompt.
   */
  "cwe"?: string;
  /**
   * Base64-encoded full description.
   */
  "description": string;
  /**
   * Directory patterns this prompt applies to.
   */
  "directories": Array<string>;
  /**
   * The execution mode for an AI rule revision.
   */
  "executionMode": AiCustomRuleRevisionExecutionMode;
  /**
   * Keywords used to search for relevant files.
   */
  "fileSearchKeywords": Array<string>;
  /**
   * File glob patterns this prompt applies to.
   */
  "globs": Array<string>;
  /**
   * Whether this is a default Datadog prompt.
   */
  "isDefault": boolean;
  /**
   * Whether this prompt is for testing only.
   */
  "isTesting": boolean;
  /**
   * Programming language
   */
  "language"?: Language;
  /**
   * Keywords to exclude from results.
   */
  "resultKeywordsExclude": Array<string>;
  /**
   * The version of the rule this prompt is associated with.
   */
  "ruleVersion": string;
  /**
   * Rule severity
   */
  "severity": CustomRuleRevisionAttributesSeverity;
  /**
   * Base64-encoded short description.
   */
  "shortDescription": string;
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
    category: {
      baseName: "category",
      type: "CustomRuleRevisionAttributesCategory",
      required: true,
    },
    checksum: {
      baseName: "checksum",
      type: "string",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    cwe: {
      baseName: "cwe",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    directories: {
      baseName: "directories",
      type: "Array<string>",
      required: true,
    },
    executionMode: {
      baseName: "execution_mode",
      type: "AiCustomRuleRevisionExecutionMode",
      required: true,
    },
    fileSearchKeywords: {
      baseName: "file_search_keywords",
      type: "Array<string>",
      required: true,
    },
    globs: {
      baseName: "globs",
      type: "Array<string>",
      required: true,
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
      required: true,
    },
    isTesting: {
      baseName: "is_testing",
      type: "boolean",
      required: true,
    },
    language: {
      baseName: "language",
      type: "Language",
    },
    resultKeywordsExclude: {
      baseName: "result_keywords_exclude",
      type: "Array<string>",
      required: true,
    },
    ruleVersion: {
      baseName: "rule_version",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "CustomRuleRevisionAttributesSeverity",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
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
    return AiPromptResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
