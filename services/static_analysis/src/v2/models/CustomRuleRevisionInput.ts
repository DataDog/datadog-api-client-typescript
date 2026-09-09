import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Argument } from "./Argument";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";
import { CustomRuleRevisionTest } from "./CustomRuleRevisionTest";
import { Language } from "./Language";

/**
 * A revision of a custom static analysis rule as embedded in a rule supplied by a create
 * or update request. Nested revisions are sent flat, without a `data`/`type`/`attributes`
 * envelope. `id`, `version_id`, `checksum`, `created_at` and `created_by` are server-assigned
 * and read-only; they are declared so that a ruleset previously read back can be supplied
 * unchanged.
 */
export class CustomRuleRevisionInput {
  /**
   * Rule arguments
   */
  "arguments"?: Array<Argument>;
  /**
   * Rule category
   */
  "category"?: CustomRuleRevisionAttributesCategory;
  /**
   * Code checksum
   */
  "checksum"?: string;
  /**
   * Rule code
   */
  "code"?: string;
  /**
   * Creation timestamp
   */
  "createdAt"?: Date;
  /**
   * Creator identifier
   */
  "createdBy"?: string;
  /**
   * Revision creation message
   */
  "creationMessage"?: string;
  /**
   * Associated CVE
   */
  "cve"?: string;
  /**
   * Associated CWE
   */
  "cwe"?: string;
  /**
   * Base64-encoded full description
   */
  "description"?: string;
  /**
   * Documentation URL
   */
  "documentationUrl"?: string;
  /**
   * Revision identifier
   */
  "id"?: string;
  /**
   * Whether the revision should be published
   */
  "isPublished"?: boolean;
  /**
   * Whether this is a testing revision
   */
  "isTesting"?: boolean;
  /**
   * Programming language
   */
  "language"?: Language;
  /**
   * Rule severity
   */
  "severity"?: CustomRuleRevisionAttributesSeverity;
  /**
   * Base64-encoded short description
   */
  "shortDescription"?: string;
  /**
   * Whether to use AI for fixes
   */
  "shouldUseAiFix"?: boolean;
  /**
   * Rule tags
   */
  "tags"?: Array<string>;
  /**
   * Rule tests
   */
  "tests"?: Array<CustomRuleRevisionTest>;
  /**
   * Tree-sitter query
   */
  "treeSitterQuery"?: string;
  /**
   * Monotonically increasing version number of the revision.
   */
  "versionId"?: number;
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
    },
    category: {
      baseName: "category",
      type: "CustomRuleRevisionAttributesCategory",
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
    creationMessage: {
      baseName: "creation_message",
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
    id: {
      baseName: "id",
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
      type: "Language",
    },
    severity: {
      baseName: "severity",
      type: "CustomRuleRevisionAttributesSeverity",
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
    },
    shouldUseAiFix: {
      baseName: "should_use_ai_fix",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    tests: {
      baseName: "tests",
      type: "Array<CustomRuleRevisionTest>",
    },
    treeSitterQuery: {
      baseName: "tree_sitter_query",
      type: "string",
    },
    versionId: {
      baseName: "version_id",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomRuleRevisionInput.attributeTypeMap;
  }

  public constructor() {}
}
