import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Argument } from "./Argument";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";
import { CustomRuleRevisionTest } from "./CustomRuleRevisionTest";
import { Language } from "./Language";

/**
 * A revision of a custom static analysis rule as embedded in a rule or ruleset response.
 */
export class CustomRuleRevisionEmbedded {
  /**
   * Rule arguments
   */
  "arguments": Array<Argument> | null;
  /**
   * Rule category
   */
  "category": CustomRuleRevisionAttributesCategory;
  /**
   * Code checksum
   */
  "checksum": string;
  /**
   * Rule code
   */
  "code": string;
  /**
   * Creation timestamp
   */
  "createdAt": Date;
  /**
   * Creator identifier
   */
  "createdBy": string;
  /**
   * Revision creation message
   */
  "creationMessage": string;
  /**
   * Associated CVE. Omitted when the revision has no associated CVE.
   */
  "cve"?: string;
  /**
   * Associated CWE. Omitted when the revision has no associated CWE.
   */
  "cwe"?: string;
  /**
   * Full description
   */
  "description": string;
  /**
   * Documentation URL. Omitted when the revision has no documentation URL.
   */
  "documentationUrl"?: string;
  /**
   * Revision identifier
   */
  "id": string;
  /**
   * Whether the revision is published
   */
  "isPublished": boolean;
  /**
   * Whether this is a testing revision
   */
  "isTesting": boolean;
  /**
   * Programming language
   */
  "language": Language;
  /**
   * Rule severity
   */
  "severity": CustomRuleRevisionAttributesSeverity;
  /**
   * Short description
   */
  "shortDescription": string;
  /**
   * Whether to use AI for fixes
   */
  "shouldUseAiFix": boolean;
  /**
   * Rule tags
   */
  "tags": Array<string> | null;
  /**
   * Rule tests
   */
  "tests": Array<CustomRuleRevisionTest> | null;
  /**
   * Tree-sitter query
   */
  "treeSitterQuery": string;
  /**
   * Monotonically increasing version number of the revision.
   */
  "versionId": number;
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
      type: "Array<Argument>",
      required: true,
    },
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
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    creationMessage: {
      baseName: "creation_message",
      type: "string",
      required: true,
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
      required: true,
    },
    documentationUrl: {
      baseName: "documentation_url",
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
    shouldUseAiFix: {
      baseName: "should_use_ai_fix",
      type: "boolean",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    tests: {
      baseName: "tests",
      type: "Array<CustomRuleRevisionTest>",
      required: true,
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
      required: true,
    },
    versionId: {
      baseName: "version_id",
      type: "number",
      required: true,
      format: "int64",
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
    return CustomRuleRevisionEmbedded.attributeTypeMap;
  }

  public constructor() {}
}
